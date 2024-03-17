import React from "react";
import img from "./logo192.png";

function ManagerPage() {
  return (
    <div class="container">
      <nav>
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
                <span class="nav-item">Setting</span>
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
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
          }}
        >
          All Request
        </div>

        <div
          style={{
            width: "936px",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          <div style={{ width: "225px", marginLeft: "35px" }}>Employee</div>
          <div style={{ width: "253px" }}>Work Activity</div>
          <div>Expense</div>
        </div>

        <div
          style={{
            border: "1px solid #b3a6a6",
            boxShadow:
              "0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
            borderRadius: "5px",
            padding: "10px",
            width: "70%",
            minWidth: "fit-content",
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img src={img} style={{ width: "50px" }} />
            <div>John Witch</div>
          </div>
          <div style={{ width: "250px" }}>
            Transportation, .............. ................. ..............
          </div>
          <div style={{ width: "150px" }}>1000000đ</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                background: "#0e9632",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Confirm
            </button>

            <button
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                background: "#b01212",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Reject
            </button>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #b3a6a6",
            boxShadow:
              "0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
            borderRadius: "5px",
            padding: "10px",
            width: "70%",
            minWidth: "fit-content",
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img src={img} style={{ width: "50px" }} />
            <div>John Witch</div>
          </div>
          <div style={{ width: "250px" }}>
            Transportation, .............. ................. ..............
          </div>
          <div style={{ width: "150px" }}>1000000đ</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                background: "#0e9632",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Confirm
            </button>

            <button
              style={{
                width: "100px",
                height: "30px",
                borderRadius: "5px",
                background: "#b01212",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerPage;
