import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPAge } from "./pages/AllIdeasPage";

export const App = () => {
    return (
        <TrpcProvider>
            <AllIdeasPAge></AllIdeasPAge>
        </TrpcProvider>
    );
};
