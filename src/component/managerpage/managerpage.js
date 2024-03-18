import React from "react";
import img from "./logo192.png";
import { Space, Table, Tag } from "antd";

function ManagerPage() {
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Work Activity",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "Expense",
      dataIndex: "expense",
      key: "expense",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            style={{
              border: "1px solid #389e0d",
              borderRadius: "5px",
              padding: "1px 3px",
              backgroundColor: "#b7eb8f",
            }}
          >
            Confirm
          </a>
          <a
            style={{
              border: "1px solid #d4380d",
              borderRadius: "5px",
              padding: "1px 3px",
              backgroundColor: "#ffbb96",
            }}
          >
            Reject
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      activity: "Transportation",
      expense: "1000000đ",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      activity: "Transportation",
      expense: "1000000đ",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      activity: "Transportation",
      expense: "1000000đ",
      tags: ["cool", "teacher"],
    },
  ];

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
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
      </div>
    </div>
  );
}

export default ManagerPage;
