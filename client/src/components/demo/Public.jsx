import {useNavigate} from "react-router-dom";

export const Public = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/login")}>Public</button>
        </div>
    )

}