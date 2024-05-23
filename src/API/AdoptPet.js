import axios_base from "../Components/Axios/Axios";

export const updatePetStatus = async (petId, newStatus) => {
    const data = {
        status: newStatus
    };
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch(`/pet/pets/${petId}/`, data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('Pet status updated:', response);
    } catch (error) {
        console.error('Error updating pet status:', error);
        throw error;
    }
};


export const adoptPet = async ({ credentials }) => {
    const { pet, adopter } = credentials;
    const token = localStorage.getItem('token');
    const data = {
        pet,
        adopter
    }
    try {
        const response = await axios_base.post('/adoption/', data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log(response);
        if (response.status === 201) {
            await updatePetStatus(pet, 'wishlist');
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
