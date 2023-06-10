import { z } from "zod";
import {
  createTRPCRouter,
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

});