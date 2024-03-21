import React, { useEffect, useState } from "react";
import img from "./logo192.png";
import { Space, Table, Tag } from "antd";
import "./manager.css";
import LogoutComponent from "../logoutComponent/logoutComponent";
import { useNavigate } from "react-router-dom";
import * as ItemStore from "../../server/itemStore";
import * as UserStore from "../../server/userStore";
import PopupRefuseRequest from "../refuseAdmin/refuseAdmin";

function Treasurer() {
  const navigate = useNavigate();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showRefusePopup, setShowRefusePopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [amountTotal, setAmountTotal] = useState(null);
  const [requestItem, setItems] = useState([
    {
      category: "medical",
      description: "Job description 1",
      // image: "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg",
      amount: 20000,
      user: {
        name: "User 1",
        image:
          "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg",
      },
      status: 1,
    },
    {
      category: "travel",
      description: "Job description 2",
      // image: "https://example.com/image2.jpg",
      amount: 20000,
      user: {
        name: "User 2",
        image:
          "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg",
      },
      status: 2,
    },
    {
      category: "study",
      description: "Job description 3",
      // image: "https://example.com/image3.jpg",
      amount: 20000,
      user: {
        name: "User 3",
        image:
          "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg",
      },
      status: 3,
    },
  ]);

  const handleRefuse = async (rejectionNote) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("tokenData"));
      await ItemStore.rejectItemByAdmin(
        accessToken,
        selectedItemId,
        rejectionNote
      );

      setSelectedItemId("");
      fetchItems();
      console.log("Refusal note:", rejectionNote);
      // Sau khi xử lý xong, đóng popup
      setShowRefusePopup(false);
    } catch (error) {
      console.error("Error refusing item:", error.message);
      // Xử lý lỗi nếu cần thiết
    }
  };

  const handleApprove = async (requestId) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("tokenData"));
      await ItemStore.approveRequestByAdmin(accessToken, requestId);
      fetchItems();
      fetchProfile();
    } catch (error) {
      console.error("Error approving item:", error.message);
      // Xử lý lỗi nếu cần thiết
    }
  };

  const fetchItems = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("tokenData"));
      const RequestItem = await ItemStore.getAllPostByAdmin(accessToken);

      // Lọc bỏ các phần tử có status === 0
      const filteredItems = RequestItem.listData.filter(
        (item) => item.status !== 0
      );

      // Sắp xếp mảng filteredItems theo trường updatedAt
      filteredItems.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });

      setItems(filteredItems);
    } catch (error) {
      console.error("Error fetching friends:", error.message);
    }
  };

  const handleCancelRefuse = () => {
    // Hủy bỏ việc từ chối và đóng popup
    setSelectedItemId("");
    setShowRefusePopup(false);
  };

  const handleShowRefusePopup = (itemId) => {
    // Hiển thị popup từ chối request và lưu itemId được chọn
    setSelectedItemId(itemId);
    setShowRefusePopup(true);
  };

  const getCategoryColor = (category) => {
    let color = category.length > 5 ? "geekblue" : "green";
    if (category.length < 5) {
      color = "volcano";
    }
    return color;
  };

  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      userData.role = "";
      userData.username = "";
      userData.id = "";
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    // Xử lý đăng xuất ở đây
    navigate("/");
    // Sau khi đăng xuất, đóng cửa sổ xác nhận
    setShowLogoutConfirmation(false);
  };

  const closeLogoutConfirmation = () => {
    // Đóng cửa sổ xác nhận
    setShowLogoutConfirmation(false);
  };

  const fetchProfile = async () => {
    try {
      // Assuming you have an accessToken, you can get it from your authentication context or elsewhere
      const accessToken = JSON.parse(localStorage.getItem("tokenData"));
      const ProfileItem = await UserStore.getProfile(accessToken);

      // Sắp xếp mảng RequestItem theo trường updatedAt

      console.log("amountTotal", ProfileItem);
      setAmountTotal(ProfileItem);
    } catch (error) {
      console.error("Error fetching friends:", error.message);
    }
  };

  useEffect(() => {
    function handleProtectPage() {
      // Kiểm tra xem có dữ liệu về vai trò trong localStorage không
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData.role !== "FD") {
        // Nếu vai trò khác USER, chuyển hướng đến trang "/"
        window.location.href = "/";
      }
    }

    const fetchItems = async () => {
      try {
        const accessToken = JSON.parse(localStorage.getItem("tokenData"));
        const RequestItem = await ItemStore.getAllPostByAdmin(accessToken);

        // Lọc bỏ các phần tử có status === 0
        const filteredItems = RequestItem.listData.filter(
          (item) => item.status !== 0
        );

        // Sắp xếp mảng filteredItems theo trường updatedAt
        filteredItems.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });

        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching friends:", error.message);
      }
    };

    const fetchProfile = async () => {
      try {
        // Assuming you have an accessToken, you can get it from your authentication context or elsewhere
        const accessToken = JSON.parse(localStorage.getItem("tokenData"));
        const ProfileItem = await UserStore.getProfile(accessToken);

        // Sắp xếp mảng RequestItem theo trường updatedAt

        console.log("amountTotal", ProfileItem);
        setAmountTotal(ProfileItem);
      } catch (error) {
        console.error("Error fetching friends:", error.message);
      }
    };

    handleProtectPage();
    fetchProfile();
    fetchItems();
  }, []);

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "user",
      key: "user",
      render: (user) => <a>{user.username}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Expense",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <span>
          {amount && amount.toLocaleString()}{" "}
          {/* Định dạng số thành chuỗi có dấu phân tách hàng nghìn */}
        </span>
      ),
    },
    {
      title: "category",
      key: "category",
      dataIndex: "category",
      width: "200px",
      render: (category) => (
        <Tag color={getCategoryColor(category)}>{category.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "300px",
      render: (_, record) => (
        <div className="action-area">
          {record.status === 1 && (
            <>
              <button
                className="btn-epic2"
                onClick={() => handleApprove(record.id)}
              >
                <div>
                  <span>Xác nhận</span>
                  <span>Xác nhận</span>
                </div>
              </button>
              <button
                className="btn-epic3"
                onClick={() => handleShowRefusePopup(record.id)}
              >
                <div>
                  <span>Hủy</span>
                  <span>Hủy</span>
                </div>
              </button>
            </>
          )}
          {record.status === 2 && (
            <button className="pure-button1 fuller-button1 blue">PAID</button>
          )}
          {record.status === 3 && (
            <button className="pure-button1 fuller-button1 red">REFUSE</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div class="container">
      <PopupRefuseRequest
        visible={showRefusePopup}
        onCancel={handleCancelRefuse}
        onRefuse={handleRefuse}
      />
      <LogoutComponent
        showLogout={showLogoutConfirmation}
        closeLogout={closeLogoutConfirmation}
        handleLogout={handleLogout}
      />
      <nav>
        <div class="navbar">
          <div class="logo">
            <img
              src={amountTotal &&
                amountTotal.data &&
                amountTotal.data.avatar_url &&
                amountTotal.data.avatar_url}
              alt=""
            ></img>
            <h1>
              {amountTotal &&
                amountTotal.data &&
                amountTotal.data.username &&
                amountTotal.data.username}{" "}
            </h1>
          </div>
          <p className="amount-total">
            {amountTotal &&
              amountTotal.data &&
              amountTotal.data.balance.toLocaleString()}{" "}
            vnđ
          </p>

          <ul>
            <li>
              <a href="/manager-page">
                <i class="fas fa-user"></i>
                <span class="nav-item">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="logout"
                onClick={() => setShowLogoutConfirmation(true)}
              >
                <i class="fas fa-sign-out-alt"></i>
                <span class="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        style={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
          background: "rgb(167 197 214 / 59%)",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          All Request
        </div>

        <div style={{ width: "70%" }}>
          <Table
            columns={columns}
            dataSource={requestItem}
            size="large"
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Treasurer;
