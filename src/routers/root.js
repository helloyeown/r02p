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
    }
])

export default router;