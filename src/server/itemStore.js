import axios from 'axios';

const api_url = 'https://19fe-203-113-147-184.ngrok-free.app/api/v1';

export const getAllPost = async (accessToken) => {
    try {
      const response = await axios.get(`${api_url}/expense/filter`, {
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