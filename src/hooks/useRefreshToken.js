import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get("/refresh", {
            withCredentials: true, // отправляет куки с запросом
        });
        setAuth((prev) => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken };
        });

        return response.data.accessToken;
    };

    return <div>useRefreshToken</div>;
};

export default useRefreshToken;
