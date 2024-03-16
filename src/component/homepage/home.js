import React, { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import * as ItemStore from "../../server/itemStore";
function Homepage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [shouldHideOverlay, setShouldHideOverlay] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const defaultImageUrl =
    "https://i.pinimg.com/564x/12/35/3a/12353a68b508d9720526f65b192f71bf.jpg";
  const defaultImageUrlBackground =
    "https://i.pinimg.com/originals/0a/a1/31/0aa131abc3ec589e6ecfb97b763924a4.gif";
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [imageUrlBackground, setImageUrlBackground] = useState(
    defaultImageUrlBackground
  );
  const [modalInput, setModalInput] = useState({
    category: "",
    description: "",
    price: "",
  });
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

  const categoryImages = {
    default:
      "https://i.pinimg.com/564x/12/35/3a/12353a68b508d9720526f65b192f71bf.jpg",
    medical:
      "https://i.pinimg.com/564x/81/a7/58/81a75847c7b88e6f2f11b553d26ab65b.jpg",
    travel:
      "https://i.pinimg.com/736x/79/5b/81/795b8179c95c18452616914259a6d611.jpg",
    food: "https://i.pinimg.com/564x/51/35/27/5135270181bf161435686dea0e2f7453.jpg",
    study:
      "https://i.pinimg.com/564x/e4/45/30/e445308d37ee7f436653e79771bc4aeb.jpg",
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    const { name, value } = event.target;
    setModalInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setSelectedCategory(selectedCategory);

    // Thay đổi URL hình ảnh tương ứng với category được chọn
    // Đây là nơi bạn cần thêm logic để ánh xạ giữa category và URL hình ảnh
    // Dưới đây là một ví dụ đơn giản
    // https://i.pinimg.com/564x/27/71/37/277137c29c5e165a6453a2a61cdcb4b2.jpg
    // https://i.pinimg.com/564x/97/66/86/9766866107f0be759a41d32a1c63c92c.jpg
    // https://i.pinimg.com/564x/6c/93/8a/6c938a335000b28bf6100da8c17d6d3b.jpg
    switch (selectedCategory) {
      case "medical":
        setImageUrl(
          "https://i.pinimg.com/564x/81/a7/58/81a75847c7b88e6f2f11b553d26ab65b.jpg"
        );
        break;
      case "travel":
        setImageUrl(
          "https://i.pinimg.com/736x/79/5b/81/795b8179c95c18452616914259a6d611.jpg"
        );
        break;
      case "food":
        setImageUrl(
          "https://i.pinimg.com/564x/51/35/27/5135270181bf161435686dea0e2f7453.jpg"
        );
        break;
      case "study":
        setImageUrl(
          "https://i.pinimg.com/564x/e4/45/30/e445308d37ee7f436653e79771bc4aeb.jpg"
        );
        break;
      default:
        setImageUrl(defaultImageUrl);
        break;
    }
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleRequest = () => {
    navigate("/home-page");
  };

  const handleBackgroundClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBackgroundClicks = (imageUrl) => {
    setImageUrlBackground(imageUrl);
    setIsPopupVisible(false); // Close popup after selecting an image
    localStorage.setItem("backgroundImageUrl", imageUrl);
  };

  const handleModalInputChange = (event) => {
    const { name, value } = event.target;
    setModalInput((prevInput) => ({
      ...prevInput,
      [name]: name === "price" ? parseInt(value) : value, // Chuyển đổi thành số nguyên nếu trường là 'price'
    }));
  };

  const handleCreateRequest = async () => {
    const categoryValue = selectedCategory || "default";
    const accessToken = JSON.parse(localStorage.getItem("tokenData"));
    const newRequest = {
      category: categoryValue,
      description: modalInput.description,
      amount: modalInput.price, // You can set tag as per your logic
      user: {
        name: "Your Name", // Set user name accordingly
        image:
          "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg", // Set user image accordingly
      },
      timestamp: new Date().toISOString(), // Set current timestamp
    };

    const newRequestData = {
      amount: modalInput.price,
      category: categoryValue,
      description: modalInput.description,
      // tag: "tag 4", // You can set tag as per your logic
      // user: {
      //   name: "Your Name", // Set user name accordingly
      //   image: "https://i.pinimg.com/564x/8f/56/76/8f5676d7ab7bc52747fca59d56bbb49c.jpg", // Set user image accordingly
      // },
      // timestamp: new Date().toISOString(), // Set current timestamp
    };

    try {
      // Gửi yêu cầu tạo mới đến API
      const createdRequest = await ItemStore.createRequest(
        accessToken,
        newRequestData
      );
      console.log("New request created:", createdRequest);
      // Sau khi tạo yêu cầu thành công, bạn có thể thực hiện các hành động khác tại đây (ví dụ: cập nhật giao diện, hiển thị thông báo, vv.)
      handleModalToggle();
      setItems((prevRequests) => [newRequest, ...prevRequests]);
    } catch (error) {
      console.error("Error while creating request:", error.message);
      // Xử lý lỗi nếu cần
    }
  };

  const handleModalToggle = () => {
    setModalVisible(!modalVisible); // Khi click vào button, cập nhật state để hiển thị/ẩn modal
    setShouldHideOverlay(modalVisible); // Nếu modal đang hiển thị, đặt biến trạng thái trung gian là true
    if (!modalVisible) {
      setOverlayVisible(true); // Nếu modal không hiển thị, hiển thị lớp phủ ngay lập tức
    }
  };

  useEffect(() => {
    const storedBackgroundImageUrl = localStorage.getItem("backgroundImageUrl");
    if (storedBackgroundImageUrl) {
      setImageUrlBackground(storedBackgroundImageUrl);
    }
    const fetchItems = async () => {
      try {
        // Assuming you have an accessToken, you can get it from your authentication context or elsewhere
        const accessToken = JSON.parse(localStorage.getItem("tokenData"));
        const RequestItem = await ItemStore.getAllPost(accessToken);
        setItems(RequestItem.listData);
      } catch (error) {
        console.error("Error fetching friends:", error.message);
      }
    };

    if (shouldHideOverlay) {
      setTimeout(() => {
        setOverlayVisible(false); // Nếu cần ẩn lớp phủ, chờ 300ms trước khi ẩn
      }, 500);
    }

    fetchItems();
  }, [shouldHideOverlay]);
  return (
    <div className="homepage">
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
      <div class="section">
        <div
          className={`over-play-modal ${overlayVisible ? "show" : ""}`}
          onClick={handleModalToggle}
        >
          <div className="btn-close">x</div>
        </div>
        <input
          class="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
        />
        <label
          for="modal-btn"
          className="modal-label"
          onClick={handleModalToggle}
        >
          Create Request <i class="uil uil-expand-arrows"></i>
        </label>
        <div className={`modal ${modalVisible ? "show" : ""}`}>
          <div class="modal-wrap">
            <img src={imageUrl} alt="Category" />
            <div class="modal-content">
              <h1 className="modal_title">REQUEST</h1>
              <div className="modal_category">
                <p className="labelCss">Category:</p>
                <select
                  className="select_modal"
                  id="category"
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="default">default</option>
                  <option value="medical">medical</option>
                  <option value="travel">travel</option>
                  <option value="food">food</option>
                  <option value="study">study</option>
                </select>
              </div>
              <div className="modal_category">
                <p className="labelCss">Description:</p>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="modal_input"
                  value={modalInput.description}
                  onChange={handleModalInputChange}
                ></input>
              </div>
              <div className="modal_category">
                <p className="labelCss">Price:</p>
                <input
                  className="modal_input"
                  type="number"
                  id="price"
                  name="price"
                  value={modalInput.price}
                  onChange={handleModalInputChange}
                ></input>
              </div>
              <button className="btn-epic" onClick={handleCreateRequest}>
                <div>
                  <span>Create</span>
                  <span>Create</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
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
                <a href="#" onClick={handleRequest}>
                  <i class="fas fa-user"></i>
                  <span class="nav-item">REQUEST</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-chart-bar"></i>
                  <span class="nav-item" onClick={handleBackgroundClick}>
                    BACKGROUND
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={handleProfile}>
                  <i class="fas fa-cog"></i>
                  <span class="nav-item">Profile</span>
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
        {/* https://i.pinimg.com/originals/0a/a1/31/0aa131abc3ec589e6ecfb97b763924a4.gif */}
        {/* https://i.pinimg.com/originals/3a/82/56/3a8256b391b0de71639848f2815c2b14.gif */}
        <div class="main">
          <img
            className="background-main"
            src={imageUrlBackground}
            alt="User"
          ></img>
          {/* <div class="main-top">
            <p>Explore the universe!</p>
          </div> */}
          <div class="main-body">
            <h1 className="title-main-body">Recent Request</h1>

            <div class="search_bar">
              <input type="search" placeholder="Search request here..."></input>
              <select name="" id="">
                <option>default</option>
                <option>study</option>
                <option>Medical</option>
                <option>Travel</option>
                <option>Food</option>
              </select>
              <select class="filter">
                <option>Filter</option>
              </select>
            </div>
            <div class="tags_bar">
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Medical</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Study</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Food</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Travel</span>
              </div>
            </div>

            <div class="row">
              <p>
                There are more than <span>400</span> request
              </p>
            </div>
            <div class="container_card">
              {requestItem &&
                requestItem.map((item, index) => (
                  <div class="card" key={index}>
                    <div class="card-header">
                      {item.category && categoryImages[item.category] && (
                        <img
                          src={categoryImages[item.category]}
                          alt={`Category ${index}`}
                        />
                      )}
                    </div>
                    <div class="card-body">
                      <span class="tag tag-teal">{item.amount}</span>
                      <h4>{item.category}</h4>
                      <p>{item.description}</p>
                      <div class="user">
                        {item.status === 1 && (
                          <a href="#" className="cta">
                            <span>Delete</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                              <path d="M1,5 L11,5"></path>
                              <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                          </a>
                        )}
                        {item.status === 2 && (
                          <button class="pure-button fuller-button red">
                            PENDING
                          </button>
                        )}
                        {item.status === 3 && (
                          <button class="pure-button fuller-button blue">
                            APPROVED
                          </button>
                        )}
                        <img src={item.user.image} alt="User" />
                        <div class="user-info">
                          <h5>
                            {localStorage.getItem("userData") &&
                              JSON.parse(localStorage.getItem("userData"))
                                .username}
                          </h5>
                          {/* <small>{item.timestamp}</small> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
