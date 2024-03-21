import axios from 'axios';

const api_url = 'https://d582-203-113-147-183.ngrok-free.app/api/v1';

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

export const getProfile = async (accessToken) => {
  try {
    const response = await axios.get(`${api_url}/user/getInfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const posts = response.data; // Cập nhật dòng này dựa trên cấu trúc phản hồi của API của bạn
    return posts;
  } catch (error) {
    console.error("Error while fetching posts:", error.message);
    throw error;
  }
};

