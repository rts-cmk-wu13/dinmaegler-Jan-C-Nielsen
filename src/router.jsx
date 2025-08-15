import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";

import User from "./pages/User";
import List from "./pages/List";

import Details from "./pages/Details";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loading from "./components/loading";

import AboutUs from "./pages/AboutUs";

import { ErrorBoundary } from "./components/Error";
import MoreInfo from "./pages/MoreInfo";

import Signup from "./pages/SignUp";
// import { getProducts, getProduct } from "./api/typicode";
import { handleSignUp } from "./api/signupActions";
// import RequireAuth from "./components/RequireAuth";

import { getProducts, getProduct, getProductsNumber } from "./api/typicode";

import Login from "./pages/Login";
import { handleLogin } from "./api/loginActions";

import Compare from "./pages/Compare";

// import { handleSubmit } from "./api/actions";
// import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
    {

        path: "/",
        element: <Layout />,
        hydrateFallbackElement: < Loading />,
        errorElement: < ErrorBoundary />,
        children: [{
            index: true,
            element: <Home />,
            loader: () => getProductsNumber(4),
        },
        {
            path: "login",
            element: <Login />,
            action: handleLogin,
        },
        {
            path: "list",
            element: <List />
            ,
            loader: getProducts,
        },
        {
            path: "details/:id",
            element: <Details />,
            loader: getProduct
        },
        {
            path: "contact",
            element: <Contact />,
            // action: handleSubmit,
        },
        {
            path: "signup",
            element: <Signup />,
            action: handleSignUp,
        },
        {
            path: "about",
            element: <AboutUs />,
            // action: handleSubmit,
        },
        {
            path: "moreinfo",
            element: <MoreInfo />,
            // action: handleSubmit,
        },
        {
            path: "compare",
            element: <Compare />,
        },
        {
            path: "*",
            element: < NotFound />
        }

        ]
    }]);

export default router