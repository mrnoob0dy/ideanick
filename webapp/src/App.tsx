import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPAge } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from "./lib/routes";
import { Layout } from "./components/Layout";

export const App = () => {
    return (
        <TrpcProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout></Layout>}>
                        <Route path={getAllIdeasRoute()} element={<AllIdeasPAge></AllIdeasPAge>}></Route>
                        <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage></ViewIdeaPage>}></Route>                   
                    </Route>
                </Routes>
            </BrowserRouter>
        </TrpcProvider>
    );
};
