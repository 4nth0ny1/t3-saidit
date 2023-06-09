import type { inferRouterOutputs } from '@trpc/server'
import { z } from 'zod'
import type {AppRouter} from './server/api/root'

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allSubSaidItsOutput = RouterOutputs['subSaidIt']['getAllSubSaidIts']

export type SubSaidIt = allSubSaidItsOutput[number]
