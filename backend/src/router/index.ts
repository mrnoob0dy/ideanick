import { trpc } from "../lib/trpc";
import { createIdeaTrpcRoute } from "./createIdea";
import { getIdeaTrpcRoute } from "./getIdea";
import { getIdeasTrpcRoute } from "./getIdeas";
import { signUpTrpcRoute } from "./signUp";


export const trpcRouter = trpc.router({
    getIdea: getIdeaTrpcRoute,
    getIdeas: getIdeasTrpcRoute,
    createIdea: createIdeaTrpcRoute,
    signUp: signUpTrpcRoute
});

export type TrpcRouter = typeof trpcRouter;