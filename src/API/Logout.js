import axios_base from "../Components/Axios/Axios";

export const logout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.error('No token found!');
        return false;
    }

    try {
        const response = await axios_base.get('/user/logout/', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });

        if (response.status === 200) {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.removeItem("isOkay");
            localStorage.removeItem("isAdopter");
            localStorage.removeItem("isShelter");
            return true;
        } else {
            console.error('Logout failed with status:', response.status);
            return false;
        }
    } catch (error) {
        console.error('There was an error logging out!', error);
        return false;
    }
};
