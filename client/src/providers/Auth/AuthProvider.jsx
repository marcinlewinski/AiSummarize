import {createContext, useContext, useEffect, useRef, useState} from "react";
import Keycloak from "keycloak-js";
import {httpClient} from "../../hooks/httpClient";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isRun = useRef(false);
    const kc = useRef(null);

    const refreshToken = async () => {
        try {
            const refreshed = await kc.current.updateToken(5);

            if (refreshed) {
                httpClient.defaults.headers.common["Authorization"] = `Bearer ${kc.current.token}`;
            }
            return refreshed;
        } catch (error) {
            console.error("Error refreshing token", error);
            return false;
        }
    };
    const checkAndRefreshToken = async () => {
        if (kc.current && kc.current.token) {
            const tokenExpiration = kc.current.tokenParsed?.exp || 0;
            const currentTime = Math.floor(Date.now() / 1000);

            if (tokenExpiration <= currentTime + 60) {
                await refreshToken();
            }
        }
    };
    const logout = () => {
        kc.current.logout();
        setIsAuthenticated(false);
    };


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
                const auth = await kc.current.init({onLoad: "login-required"});
                if (!auth) {
                    window.location.reload();
                } else {
                    httpClient.defaults.headers.common[
                        "Authorization"
                        ] = `Bearer ${kc.current.token}`;

                    setIsAuthenticated(true);

                }
            } catch (error) {
                console.error("Authentication Failed", error);
                setIsAuthenticated(false);
            }
        };

        initializeKeycloak();
    }, []);

    useEffect(() => {
        const tokenRefreshInterval = setInterval(async () => {
            await checkAndRefreshToken();
        }, 50000);

        return () => clearInterval(tokenRefreshInterval);
    }, [kc]);

    return (
        <AuthContext.Provider value={{isAuthenticated, logout, kc}}>
            {children}
        </AuthContext.Provider>
    );
};
