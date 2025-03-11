import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { trpc } from "../lib/trpc";
import { createIdeaTrpcRoute } from "./createIdea";
import { getIdeaTrpcRoute } from "./getIdea";
import { getIdeasTrpcRoute } from "./getIdeas";
import { getMeTrpcRoute } from "./getMe";
import { signInTrpcRoute } from "./signIn";
import { signUpTrpcRoute } from "./signUp";
import { updateIdeaTrpcRoute } from "./updateIdea";


export const trpcRouter = trpc.router({
    getIdea: getIdeaTrpcRoute,
    getIdeas: getIdeasTrpcRoute,
    createIdea: createIdeaTrpcRoute,
    signUp: signUpTrpcRoute,
    signIn: signInTrpcRoute,
    getMe: getMeTrpcRoute,
    updateIdea: updateIdeaTrpcRoute
});

export type TrpcRouter = typeof trpcRouter;
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>