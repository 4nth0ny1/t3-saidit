import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,

} from "~/server/api/trpc";
import {getAllComments} from '../../../types'

export const commentRouter = createTRPCRouter({
  getAllComments: publicProcedure
  .input(getAllComments)
  .query(({ ctx, input }) => {
    return ctx.prisma.comment.findMany({
      where: {
        post: {
          id: input.postId
        }
      },
        orderBy: [{ createdAt: "desc" }],
    });
  }),

  createComment: protectedProcedure
  .input(z.object({message: z.string(), postId: z.string(), topicId: z.string()}))
  .mutation(({ctx, input}) => {
    return ctx.prisma.comment.create({
      data: {
        message: input.message,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        },
        topic: {
          connect: {
            id: input.topicId
          }
        }, 
        post: {
          connect: {
            id: input.postId
          }
        }
        
      }
    })
  })

});