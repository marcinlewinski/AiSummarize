import {useEffect, useRef} from "react";
import {httpClient} from "../../hooks/httpClient";

export const Protected = () => {
    const isRun = useRef(false);
    useEffect(() => {

        httpClient.get('/everyone-authenticated')
            .then((res) => console.log(res))
            .catch((err) => console.error(err));

    }, []);

    return (
        <div>Protected</div>
    );
};
