import React, {useEffect, useRef, useState} from "react";
import Keycloak from "keycloak-js";
import {httpClient} from "./httpClient";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isRun = useRef(false);
    const  kc = useRef(null);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;

         kc.current = new Keycloak({
            url: process.env.REACT_APP_KEYCLOAK_URL,
            realm: process.env.REACT_APP_KEYCLOAK_REALM,
            clientId: process.env.REACT_APP_KEYCLOAK_CLIENT,
        })
        kc.current.init({
            onLoad: 'login-required',
        }).then((auth) => {
            if (!auth) {
                window.location.reload();
            } else {
                httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.current.token}`;

                setIsAuthenticated(true)
                kc.current.onTokenExpired = () => {
                    console.log('token expired')
                }
            }
        }, () => {
            console.error("Authentication Failed");
            setIsAuthenticated(false);
        });


    }, []);

    const logout = () => {
        kc.current.logout();
        setIsAuthenticated(false);
    };
    return {isAuthenticated, logout};

}