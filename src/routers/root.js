import { Suspense, lazy } from "react";
import IndexPage from "../pages/board/IndexPage";
import ListPage from "../pages/board/ListPage";
import LoadingPage from "../pages/LoadingPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainPage } = require("../pages/MainPage");
const { default: AboutPage } = require("../pages/AboutPage");

const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>
    },
    {
        path: "/about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "/board",
        element: <Suspense fallback={LoadingPage}><Board_Index /></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={LoadingPage}><Board_List /></Suspense>
            }
        ]
    },
])

export default router;