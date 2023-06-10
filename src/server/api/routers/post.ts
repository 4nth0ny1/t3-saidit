import { z } from "zod";
import {
  createTRPCRouter,
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
});