import ListPage from "../pages/board/ListPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainPage } = require("../pages/MainPage");
const { default: AboutPage } = require("../pages/AboutPage");

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
        children: [
            {
                path: "list",
                element: <ListPage></ListPage>
            }
        ]
    }
])

export default router;