import axios from "axios";

const api_url = "http://[::1]:3000/api/v1";

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

export const createRequest = async (accessToken, requestData) => {
  try {
    const response = await axios.post(`${api_url}/expense`, requestData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const createdData = response.data; // Cập nhật dòng này dựa trên cấu trúc phản hồi của API của bạn
    return createdData;
  } catch (error) {
    console.error("Error while creating request:", error.message);
    throw error;
  }
};

export const deleteRequest = async (accessToken, requestId) => {
  try {
    const response = await axios.delete(`${api_url}/expense/${requestId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; // Nếu API của bạn trả về dữ liệu sau khi xóa, hãy cập nhật dòng này
  } catch (error) {
    console.error("Error while deleting request:", error.message);
    throw error;
  }
};

export const getAllPostByAdmin = async (accessToken) => {
  try {
    const response = await axios.get(`${api_url}/admin/expense/filter`, {
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

export const rejectItemByAdmin = async (accessToken, requestId, rejectionNote) => {
  try {
    const response = await axios.post(
      `${api_url}/admin/expense/reject/${requestId}`,
      { note: rejectionNote },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data; // Nếu API của bạn trả về dữ liệu sau khi từ chối, hãy cập nhật dòng này
  } catch (error) {
    console.error("Error while rejecting item:", error.message);
    throw error;
  }
};

export const approveRequestByAdmin = async (accessToken, requestId) => {
  try {
    const response = await axios.post(
      `${api_url}/admin/expense/approve/${requestId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data; // Nếu API của bạn trả về dữ liệu sau khi phê duyệt, hãy cập nhật dòng này
  } catch (error) {
    console.error("Error while approving request:", error.message);
    throw error;
  }
};


