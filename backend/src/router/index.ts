import { trpc } from "../lib/trpc";
import { createIdeaTrpcRoute } from "./createIdea";
import { getIdeaTrpcRoute } from "./getIdea";
import { getIdeasTrpcRoute } from "./getIdeas";
import { getMeTrpcRoute } from "./getMe";
import { signInTrpcRoute } from "./signIn";
import { signUpTrpcRoute } from "./signUp";


export const trpcRouter = trpc.router({
    getIdea: getIdeaTrpcRoute,
    getIdeas: getIdeasTrpcRoute,
    createIdea: createIdeaTrpcRoute,
    signUp: signUpTrpcRoute,
    signIn: signInTrpcRoute,
    getMe: getMeTrpcRoute
});

export type TrpcRouter = typeof trpcRouter;