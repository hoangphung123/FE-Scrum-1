import React from "react";
import "./home.css";
function Homepage() {
  return (
    <div className="homepage">
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

        <section class="main">
          {/* <div class="main-top">
            <p>Explore the universe!</p>
          </div> */}
          <div class="main-body">
            <h1>Recent Jobs</h1>

            <div class="search_bar">
              <input type="search" placeholder="Search job here..."></input>
              <select name="" id="">
                <option>Category</option>
                <option>Web Design</option>
                <option>App Design</option>
                <option>App Development</option>
              </select>
              <select class="filter">
                <option>Filter</option>
              </select>
            </div>

            <div class="tags_bar">
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Programming</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>Design</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>PHP</span>
              </div>
              <div class="tag">
                <i class="fas fa-times"></i>
                <span>JavaScript</span>
              </div>
            </div>

            <div class="row">
              <p>
                There are more than <span>400</span> request
              </p>
              <a href="#">See all</a>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-google-drive"></i>
                </div>
                <div class="text">
                  <h2>UX Designer</h2>
                  <span>Google Drive - Junior Post</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$6.7 - $12.5k /yr</h4>
                <span>1 days ago</span>
              </div>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-google"></i>
                </div>
                <div class="text">
                  <h2>JavaScript Developer</h2>
                  <span>Google - Senior Post</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$8.7 - $13.2k /yr</h4>
                <span>2 days ago</span>
              </div>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-google"></i>
                </div>
                <div class="text">
                  <h2>JavaScript Developer</h2>
                  <span>Google - Senior Post</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$8.7 - $13.2k /yr</h4>
                <span>2 days ago</span>
              </div>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-facebook"></i>
                </div>
                <div class="text">
                  <h2>Product Developer</h2>
                  <span>Facbook - Manager Post</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$11 - $18.5k /yr</h4>
                <span>2 days ago</span>
              </div>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-git-alt"></i>
                </div>
                <div class="text">
                  <h2>Programmer</h2>
                  <span>Github - Juni Post</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$6 - $11.5k /yr</h4>
                <span>3 days ago</span>
              </div>
            </div>

            <div class="job_card">
              <div class="job_details">
                <div class="img">
                  <i class="fab fa-youtube"></i>
                </div>
                <div class="text">
                  <h2>React.js Expert</h2>
                  <span>Youtube - VIP</span>
                </div>
              </div>
              <div class="job_salary">
                <h4>$12.5 - $25.5k /yr</h4>
                <span>4 days ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;