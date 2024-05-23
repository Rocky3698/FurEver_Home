import axios_base from "../Components/Axios/Axios";
export const login = async ({credentials}) => {
    const {email,password}=credentials;
    try {
        const response = await axios_base.post('/user/login/', {
            email,
            password
        });
        console.log(response);
        if (response.data.user_id && response.data.token && response.data.role) {
            localStorage.setItem("user_id", response.data.user_id);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("isOkay", true);
            if(response.data.role == "adopter"){
                localStorage.setItem("isAdopter", true);
                localStorage.setItem("isShelter", false);
                return 'adopter';
            }
            if(response.data.role == "shelter"){
                localStorage.setItem("isAdopter", false);
                localStorage.setItem("isShelter", true);
                return 'shelter';
            }
        } else {
            console.log("Invalid credentials or error occurred");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
