import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,

} from "~/server/api/trpc";
import {getSingleTopic} from '../../../types'

export const topicRouter = createTRPCRouter({
  getAllTopics: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
        orderBy: [{ createdAt: "desc" }],
    });
  }),

  getOneTopic: publicProcedure
  .input(getSingleTopic)
  .query(async({ctx, input}) => {
    return await ctx.prisma.topic.findUnique({
      where: {
        id: input.topicId
      }
    })
  }),

  createTopic: protectedProcedure
  .input(z.object({name: z.string(), description: z.string()}))
  .mutation(({ctx, input}) => {
    return ctx.prisma.topic.create({
      data: {
        name: input.name,
        description: input.description,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        }
      }
    })
  }),

});
