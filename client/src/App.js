import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/errorPage/EroorPage";
import {Home} from "./components/home/Home";
import {Login} from "./components/login/Login";
import {Public} from "./components/demo/Public";
import {useAuth} from "./providers/Auth/AuthProvider";
import {HomePage} from "./pages/homePage/HomePage";
import {SummarizePage} from "./pages/summarizePage/SummarizePage";
import {PricingPage} from "./pages/pricingPage/PricingPage";


const routerConfig = [
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/home',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/summarize',
        element: <SummarizePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/pricing',
        element: <PricingPage/>,
        errorElement: <ErrorPage/>,
    },
];

const App = () => {
    const {isAuthenticated} = useAuth();

    return (
        <Router>
            {isAuthenticated && (
                <div className="app-root">
                    <Routes>
                        {routerConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                                errorElement={route.errorElement}
                            />
                        ))}
                    </Routes>
                </div>
            )}
        </Router>
    );
};

export default App;
