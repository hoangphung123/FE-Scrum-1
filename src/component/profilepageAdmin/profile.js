import React, { useState, useEffect } from "react";
import "./profile.css";
import "react-toastify/dist/ReactToastify.css";
import { WrapperContentProfile, WrapperInput, WrapperLabel } from "./style.js";
import { useNavigate } from "react-router-dom";
import * as UserStore from "../../server/userStore";

function Profile() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [amountTotal, setAmountTotal] = useState(null);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleRequest = () => {
    navigate("/manager-page");
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBackgroundClicks = (imageUrl) => {
    setIsPopupVisible(false); // Close popup after selecting an image
    localStorage.setItem("backgroundImageUrl", imageUrl);
  };

  const handleBackgroundClick = () => {
    setIsPopupVisible(true);
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

    // handleProtectPage();
    fetchProfile();
  }, []);
  return (
    <div class="container">
      <div
        className={`popup-overlay ${isPopupVisible ? "show" : ""}`}
        onClick={handleClosePopup}
      ></div>
      <div className={`popup ${isPopupVisible ? "show" : ""}`}>
        <div className="popup-image">
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/0a/a1/31/0aa131abc3ec589e6ecfb97b763924a4.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/0a/a1/31/0aa131abc3ec589e6ecfb97b763924a4.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/3a/82/56/3a8256b391b0de71639848f2815c2b14.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/3a/82/56/3a8256b391b0de71639848f2815c2b14.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/564x/ea/50/7d/ea507d37cc1a18528134941b4f297812.jpg"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/564x/ea/50/7d/ea507d37cc1a18528134941b4f297812.jpg"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/1d/0b/2e/1d0b2e5e8f98b355e2cc68d4c2b46df7.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/1d/0b/2e/1d0b2e5e8f98b355e2cc68d4c2b46df7.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/c8/52/2e/c8522e607334d2059ca00ecfac184316.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/c8/52/2e/c8522e607334d2059ca00ecfac184316.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/7b/6b/b3/7b6bb30ca13ea70ad159058e1012c624.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/7b/6b/b3/7b6bb30ca13ea70ad159058e1012c624.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/d0/56/40/d05640bdc1beb4f6971044bfff635e28.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/d0/56/40/d05640bdc1beb4f6971044bfff635e28.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/d7/33/34/d733345e4f11231904e7634a04439e21.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/d7/33/34/d733345e4f11231904e7634a04439e21.gif"
              )
            }
          ></img>
          <img
            className="background-choose"
            src="https://i.pinimg.com/originals/d8/aa/d9/d8aad938f2beea672124ebf1309584c7.gif"
            alt="User"
            onClick={() =>
              handleBackgroundClicks(
                "https://i.pinimg.com/originals/d8/aa/d9/d8aad938f2beea672124ebf1309584c7.gif"
              )
            }
          ></img>
        </div>
        {/* https://i.pinimg.com/originals/d8/aa/d9/d8aad938f2beea672124ebf1309584c7.gif */}
        <button className="btn-epic" onClick={handleClosePopup}>
          <div>
            <span>Close</span>
            <span>Close</span>
          </div>
        </button>
      </div>
      <nav style={{ width: "15%" }}>
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
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>
                <span class="nav-item" onClick={handleRequest}>
                  DASHBOARD
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-tasks"></i>
                <span class="nav-item" onClick={handleProfile}>
                  PROFILE
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="logout">
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
        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img
                src={amountTotal &&
                  amountTotal.data &&
                  amountTotal.data.avatar_url &&
                  amountTotal.data.avatar_url}
                class="hoverZoomLink"
              ></img>
            </a>

            <h1>
              {amountTotal &&
                amountTotal.data &&
                amountTotal.data.username &&
                amountTotal.data.username}{" "}
            </h1>

            {amountTotal &&
                amountTotal.data &&
                amountTotal.data.full_name &&
                amountTotal.data.full_name}{" "}
          </header>

          <div class="profile-bio">
            <p>
              It takes monumental improvement for us to change how we live our
              lives. Design is the way we access that improvement.
            </p>
          </div>

          <ul class="profile-social-links">
            <li>
              <a target="_blank" href="https://www.facebook.com/creativedonut">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/dropyourbass">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.behance.net/vipulsaxena">
                <i class="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Profile;
