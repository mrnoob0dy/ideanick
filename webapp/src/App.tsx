import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPAge } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from "./lib/routes";

export const App = () => {
    return (
        <TrpcProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={getAllIdeasRoute()} element={<AllIdeasPAge></AllIdeasPAge>}></Route>
                    <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage></ViewIdeaPage>}></Route>                   
                </Routes>
            </BrowserRouter>
        </TrpcProvider>
    );
};
