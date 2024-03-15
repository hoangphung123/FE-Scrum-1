import React from "react";
import "./profile.css";
import "react-toastify/dist/ReactToastify.css";
import { WrapperContentProfile, WrapperInput, WrapperLabel } from "./style.js";

function Profile() {
  return (
    <div class="container">
      <nav style={{ width: "15%" }}>
        <div class="navbar">
          <div class="logo">
            <img
              src="https://i.pinimg.com/564x/cb/36/8a/cb368a192d3e017668847525d04e1a91.jpg"
              alt=""
            ></img>
            <h1>jobs</h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>
                <span class="nav-item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span class="nav-item">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-tasks"></i>
                <span class="nav-item">Jobs Board</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-dochub"></i>
                <span class="nav-item">Documnents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-cog"></i>
                <span class="nav-item">Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question-circle"></i>
                <span class="nav-item">Help</span>
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
          marginTop: "2.5rem",
        }}
      >
        <aside class="profile-card">
          <header>
            <a target="_blank" href="#">
              <img
                src="http://lorempixel.com/150/150/people/"
                class="hoverZoomLink"
              ></img>
            </a>

            <h1>John Doe</h1>

            <h2>Better Visuals</h2>
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
