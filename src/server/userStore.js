import axios from 'axios';

const api_url = 'http://[::1]:3000/api/v1';

export const loginUser = async (loginData) => {
    try {
      const response = await axios.post(`${api_url}/auth/login`, loginData);
      const loggedInUser = response.data;
      return loggedInUser;
    } catch (error) {
      console.error('Error while logging in:', error.message);
      throw error;
    }
  };