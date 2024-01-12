import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/errorPage/EroorPage";
import {Home} from "./components/home/Home";
import {Login} from "./components/login/Login";
import {Public} from "./components/demo/Public";
import {useAuth} from "./providers/Auth/AuthProvider";


const routerConfig = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/public',
        element: <Public/>,
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
