import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,

} from "~/server/api/trpc";
import {getSinglePost, getAllPosts} from '../../../types'

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure
  .input(getAllPosts)
  .query(({ ctx, input }) => {
    return ctx.prisma.post.findMany({
      where: {
        topic: {
          id: input.topicId
        }
      },
        orderBy: [{ createdAt: "desc" }],
    });
  }),

  getOnePost: publicProcedure
  .input(getSinglePost)
  .query(async({ctx, input}) => {
    return await ctx.prisma.post.findUnique({
      where: {
        id: input.postId
      }
    })
  }),

  createPost: protectedProcedure
  .input(z.object({title: z.string(), content: z.string(), topicId: z.string()}))
  .mutation(({ctx, input}) => {
    return ctx.prisma.post.create({
      data: {
        title: input.title,
        content: input.content,
        user: {
          connect: {
            id: ctx.session.user.id
          }
        },
        topic: {
          connect: {
            id: input.topicId
          }
        }
        
      }
    })
  }), 

  deletePost: protectedProcedure
  .input(z.string())
  .mutation(({ctx, input}) => {
    return ctx.prisma.post.delete({
      where: {
        id: input
      }
    })
  })
});