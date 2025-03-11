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
import { SignOutPage } from "./pages/SignOutPage";
import { EditIdeaPage } from "./pages/EditIdeaPage";

export const App = () => {
    return (
        <TrpcProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.getSignOutRoute()} element={<SignOutPage />}></Route>
                    <Route element={<Layout />}>
                        <Route path={routes.getSignUpRoute()} element={<SignUpPage />}></Route>
                        <Route path={routes.getSignInRoute()} element={<SignInPage />}></Route>
                        <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPAge />}></Route>
                        <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />}></Route>                   
                        <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage />}></Route>
                        <Route path={routes.getEditIdeaRoute(routes.editIdeaRouteParams)} element={<EditIdeaPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </TrpcProvider>
    );
};
