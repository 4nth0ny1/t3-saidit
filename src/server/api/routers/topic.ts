import { z } from "zod";
import {
  createTRPCRouter,
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
});
