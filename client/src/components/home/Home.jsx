import {useNavigate} from "react-router-dom";
import {useAuth} from "../../providers/Auth/AuthProvider";
import {Protected} from "../demo/Protected";
import {Public} from "../demo/Public";

export const Home = () => {
    const navigate = useNavigate();
    // const {isLogged,logout} = useAuth();
    const {isLogged,logout} = useAuth();
    return (
        <div>
            Welcome to my app {}
            {/*<button onClick={() => navigate('/login')}>goToLogin!!</button>*/}
            <button onClick={() => logout()}>Logout!!</button>
            {isLogged ? <Protected></Protected> : <Public></Public>}
        </div>
    )
}