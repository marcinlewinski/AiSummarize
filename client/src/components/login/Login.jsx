import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {httpClient} from "../../hooks/httpClient";

export const Login = () => {
    // https://betweendata.io/posts/react-keycloak-authentication/
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    useEffect(() => {

        httpClient.get('/demo').then((res)=>console.log(res)).catch((err)=>console.error(err));

    }, []);


    const handleLogin = (event) => {
        event.preventDefault();
        console.log(loginData);
        navigate('/');

    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        console.log(value);
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <div>
            <form>
                <input onChange={(event) => handleChange(event)} name={"email"} placeholder={'email'} type={"text"}/>
                <input onChange={handleChange} name={'password'} type={"password"}/>
                <button
                    onClick={(event) => handleLogin(event)}
                    type={"submit"}
                >
                    Submit
                </button>
            </form>
        </div>

    )
}