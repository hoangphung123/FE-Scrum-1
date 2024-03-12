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

        <div class="main">
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
            <div class="container_card">
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                    alt="rover"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">Technology</span>
                  <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                  <p>An exploration into the truck's polarising design</p>
                  <div class="user">
                    <img
                      src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>July Dec</h5>
                      <small>2h ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                    alt="ballons"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-purple">Popular</span>
                  <h4>How to Keep Going When You Don’t Know What’s Next</h4>
                  <p>
                    The future can be scary, but there are ways to deal with
                    that fear.
                  </p>
                  <div class="user">
                    <img
                      src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Eyup Ucmaz</h5>
                      <small>Yesterday</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                    alt="city"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>10 Rules of Dashboard Design</h4>
                  <p>Dashboard Design Guidelines</p>
                  <div class="user">
                    <img
                      src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                    alt="city"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>10 Rules of Dashboard Design</h4>
                  <p>Dashboard Design Guidelines</p>
                  <div class="user">
                    <img
                      src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                    alt="city"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>10 Rules of Dashboard Design</h4>
                  <p>Dashboard Design Guidelines</p>
                  <div class="user">
                    <img
                      src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                    alt="city"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>10 Rules of Dashboard Design</h4>
                  <p>Dashboard Design Guidelines</p>
                  <div class="user">
                    <img
                      src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                    alt="city"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>10 Rules of Dashboard Design</h4>
                  <p>Dashboard Design Guidelines</p>
                  <div class="user">
                    <img
                      src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                      alt="user"
                    />
                    <div class="user-info">
                      <h5>Carrie Brewer</h5>
                      <small>1w ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
