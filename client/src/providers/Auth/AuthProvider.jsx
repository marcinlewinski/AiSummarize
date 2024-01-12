import { createContext, useContext, useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";
import { httpClient } from "../../hooks/httpClient";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isRun = useRef(false);
    const kc = useRef(null);

    useEffect(() => {
        const initializeKeycloak = async () => {
            if (isRun.current) return;
            isRun.current = true;

            kc.current = new Keycloak({
                url: process.env.REACT_APP_KEYCLOAK_URL,
                realm: process.env.REACT_APP_KEYCLOAK_REALM,
                clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
            });

            try {
                const auth = await kc.current.init({ onLoad: "login-required" });

                if (!auth) {
                    window.location.reload();
                } else {
                    httpClient.defaults.headers.common[
                        "Authorization"
                        ] = `Bearer ${kc.current.token}`;

                    setIsAuthenticated(true);
                    kc.current.onTokenExpired = () => {
                        console.log("token expired");
                        logout();
                        setIsAuthenticated(false);
                    };
                }
            } catch (error) {
                console.error("Authentication Failed", error);
                setIsAuthenticated(false);
            }
        };

        initializeKeycloak();
    }, []);

    const logout = () => {
        kc.current.logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
