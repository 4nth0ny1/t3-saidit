import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,

} from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAllTopics: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
        orderBy: [{ createdAt: "desc" }],
    });
  }),
});
