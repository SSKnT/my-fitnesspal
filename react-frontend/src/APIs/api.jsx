import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response && error.response.status === 401){
            // redirects to login page when token expires
            window.location.href = '/auth';
        }
        return Promise.reject(error);
    }
)

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

export const loginAPI = async (username, password) => {
    
    try {
        const response = await api.post('/auth/login/', { username, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const signupAPI = async (username, password, email, age, height, weight) => {
    
    try {
        const response = await api.post('/auth/register/', { username, password, email, age, height, weight });
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export const getUserProfileAPI = async () => {
    try {
        const response = await api.get('/auth/user/');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const updateUserProfileAPI = async (username, email, age, height, weight) => {
    try {
        const response = await api.post('/auth/user/', { username, email, age, height, weight });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

export const getAllWorkoutsAPI = async () => {
    try {
        const response = await api.get('/workouts/all');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getUserEnrolledWorkoutsAPI = async () => {
    try {
        const response = await api.get('/workouts/');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const enrollWorkoutAPI = async (workoutId) => {
    try {
        const response = await api.post(`/workouts/enroll/${workoutId}/`);
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export const completeWorkoutAPI = async (workoutId) => {
    try {
        const response = await api.patch(`/workouts/${workoutId}/`, { progress: 'Completed'});
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getCommunityPostsAPI = async () => {
    try {
        const response = await api.get('/posts/all/');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const createCommunityPostAPI = async (title, img, desc) => {
    try {
        const response = await api.post('/posts/', { title, img, desc });
        return response;
    } catch (error) {
        return error.response.data;
    }
}