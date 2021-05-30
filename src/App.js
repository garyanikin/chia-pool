import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HomeScreen />
      <Advantages />
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
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <h1 className="h1-title">
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
                        Enter our address in Chia client
                      </div>
                      <div className="card-subcontent">
                        Pool <span className="text-bold">></span> Pool address
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center"
                  style={{ padding: "10px 24px 20px" }}
                >
                  <a href="#" class="btn">
                    View Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 d-block d-sm-block d-md-none"
            style={{
              padding: "8px 0 2px",
            }}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
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
                          top: "-10px",
                          left: "-35px",
                        }}
                      >
                        2
                      </span>
                    </div>
                    <div className="col-9">
                      <div className="card-content">All is ready!</div>
                      <div className="card-subcontent">
                        Automatic payments come every 10 minutes
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center"
                  style={{ padding: "10px 24px 20px" }}
                >
                  <a href="#" class="btn btn-green">
                    <img
                      src="/plus.png"
                      style={{
                        width: "24px",
                        verticalAlign: "middle",
                        marginRight: "12px",
                      }}
                    />
                    <span
                      style={{ lineHeight: "24px", verticalAlign: "middle" }}
                    >
                      Connect miner
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    {
      image: "/percent.png",
      caption: "Low fee",
    },
    {
      image: "/profit.png",
      caption: "Automatic payments every 10 min",
    },
    {
      image: "/shield.png",
      caption: "Secured servers",
    },
  ];

  return (
    <div className="container">
      <h1 className="h1-title" style={{ padding: "40px 0 20px" }}>
        Our Advanteges
      </h1>
      <div className="row">
        {advantages.map(({ image, caption }) => (
          <div
            className="col-12"
            style={{
              paddingTop: "10px",
            }}
          >
            <div className="row">
              <div className="col-4">
                <img
                  style={{ maxWidth: "96px", maxHeight: "96px" }}
                  src={image}
                />
              </div>
              <div className="col-8">{caption}</div>
            </div>
            <div
              className="col-12 d-block d-sm-block d-md-none"
              style={{
                marginTop: "10px",
                height: "1px",
                background: "rgba(58, 172, 89, 0.24)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const menus = [
    { icon: "", caption: "Home", link: "#home" },
    { icon: "", caption: "Connect", link: "#connect" },
    { icon: "", caption: "Calculator", link: "#calculator" },
    { icon: "", caption: "Community", link: "#community" },
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
