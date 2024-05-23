import axios_base from "../Components/Axios/Axios";
export const registerUser = async ( data ) => {

    try {
        const response = await axios_base.post('/user/register/', data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return(response);
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
};