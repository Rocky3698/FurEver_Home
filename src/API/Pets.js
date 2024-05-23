import axios_base from "../Components/Axios/Axios";

export const GetPets = async () => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.get('/pet/pets', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const GetShelterPets = async () => {
    const shelter_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.get(`/pet/pets/?shelter_id=${shelter_id}`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const GetPet = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.get(`/pet/pets/?pet_id=${id}`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data[0];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addPet = async (data) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.post('/pet/pets/', data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        return (response);
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deletePet = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id);
    try {
        const response = await axios_base.delete(`/pet/pets/${id}/`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        if(response.status===204){
            window.location.reload();
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

