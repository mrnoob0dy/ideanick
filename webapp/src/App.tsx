import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPAge } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import * as routes from "./lib/routes";
import { Layout } from "./components/Layout";
import './styles/global.scss';
import { NewIdeaPage } from "./pages/NewIdeaPage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";

export const App = () => {
    return (
        <TrpcProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout></Layout>}>
                        <Route path={routes.getSignUpRoute()} element={<SignUpPage></SignUpPage>}></Route>
                        <Route path={routes.getSignInRoute()} element={<SignInPage></SignInPage>}></Route>
                        <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPAge></AllIdeasPAge>}></Route>
                        <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage></NewIdeaPage>}></Route>                   
                        <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage></ViewIdeaPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </TrpcProvider>
    );
};
