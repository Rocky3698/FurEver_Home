import axios_base from "../Components/Axios/Axios";

export const updateAdoptionRequest = async ({ status, id }) => {
    console.log(status, id);
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch(`/adoption/${id}/`, status, {
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

export const deleteRquest = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id);
    try {
        const response = await axios_base.delete(`/adoption/${id}/`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        if (response.status === 204) {
            window.location.reload();
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};