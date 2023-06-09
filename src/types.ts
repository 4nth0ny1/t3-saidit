import type { inferRouterOutputs } from '@trpc/server'
import { z } from 'zod'
import type {AppRouter} from './server/api/root'

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTopicsOutput = RouterOutputs['topic']['getAllTopics']

export type Topic = allTopicsOutput[number]

export const getSingleTopic = z.object({
    topicId: z.string().cuid(),
  })

type allPostsOutput = RouterOutputs['post']['getAllPosts']
export type Post = allPostsOutput[number]

export const getAllPosts = z.object({
  topicId: z.string().cuid()
})

export const getSinglePost = z.object({
  postId: z.string().cuid(),
})

type allCommentsOutput = RouterOutputs['comment']['getAllComments']
export type Comment = allCommentsOutput[number]

export const getAllComments = z.object({
  postId: z.string().cuid()
})