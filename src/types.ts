import type { inferRouterOutputs } from '@trpc/server'
import { z } from 'zod'
import type {AppRouter} from './server/api/root'

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTopicsOutput = RouterOutputs['topic']['getAllTopics']

export type Topic = allTopicsOutput[number]

export const getSingleTopic = z.object({
    topicId: z.string().cuid(),
  })