import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HomeScreen />
      <NavBar />
    </React.Fragment>
  );
}

const HomeScreen = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "rgba(58, 172, 89, 0.08)",
      }}
    >
      <div className="container">
        <h1 className="homescreen-title text-bold mt-lg">
          2 Simple Steps to&nbsp;Connect to&nbsp;the&nbsp;Pool
        </h1>
        <div className="row">
          <div className="col-12">
            <div className="card" style={{ overflow: "hidden" }}>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div
                      className="col-3"
                      style={{ position: "relative", height: "150px" }}
                    >
                      <span
                        className="text-bold"
                        style={{
                          color: "rgba(58, 172, 89, 0.24)",
                          fontSize: "200px",
                          lineHeight: "0.65",
                          position: "absolute",
                          top: "-8px",
                          left: "-8px",
                        }}
                      >
                        1
                      </span>
                    </div>
                    <div className="col-9">
                      <div className="card-content">
                        Укажите наш адрес в клиенте Chia
                      </div>
                      <div className="card-subcontent">
                        Pool <span className="text-bold">></span> Pool address
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center"
                  style={{ paddingBottom: "20px" }}
                >
                  <a href="#" class="btn btn-altgreen">
                    View Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const menus = [
    { icon: "", caption: "Home", link: "#home" },
    { icon: "", caption: "Connect", link: "#connect" },
    { icon: "", caption: "Calculator", link: "calculator" },
    { icon: "", caption: "Community", link: "community" },
  ];
  const activeLink = "#home";

  return (
    <nav
      class="navbar fixed-bottom navbar-expand bg-white"
      style={{
        boxShadow: "0px -4px 16px rgba(21, 48, 49, 0.08)",
      }}
    >
      <div class="container-fluid">
        <ul class="navbar-nav" style={{ width: "100%" }}>
          {menus.map(({ icon, caption, link }) => (
            <li class="nav-item text-center" style={{ flex: "1 1" }}>
              <a
                class={`nav-link ${link === activeLink ? "active" : ""}`}
                aria-current={caption}
                href={link}
              >
                <div class="col-12">
                  <div className="navbar-icon">{icon}</div>
                </div>
                <div class="col-12 caption">{caption}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default App;
