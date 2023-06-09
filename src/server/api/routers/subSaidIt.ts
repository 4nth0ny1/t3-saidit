import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,

} from "~/server/api/trpc";

export const subSaidItRouter = createTRPCRouter({
  getAllSubSaidIts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.subSaidIt.findMany({
        orderBy: [{ createdAt: "desc" }],
    });
  }),
});
