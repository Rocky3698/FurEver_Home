import axios_base from "../Components/Axios/Axios";

export const updateProfile = async (info) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch('/user/', info, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('Profile updated:', response);
    } catch (error) {
        console.error('prfile update:', error);
        throw error;
    }
};