import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <HomeScreen />
      <Advantages />
      <ProfitCalculation />
      <Community />
      <Modal />
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
        paddingTop: "40px",
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
                        Enter our address in&nbsp;Chia&nbsp;client
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
    <div className="container" style={{ paddingBottom: "40px" }}>
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
              <div className="col-8 d-flex align-items-center">{caption}</div>
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

const ProfitCalculation = () => {
  const Stats = ({ caption, value, duration }) => (
    <div className="mt-4">
      <div style={{ color: "#3AAC59" }}>{caption}</div>
      <div className="pt-1 d-flex align-items-center">
        <span className="text-bold">{value}</span>
        <span className="text-small text-secondary">&nbsp;/ {duration}</span>
      </div>
    </div>
  );

  return (
    <div
      className="container-fluid"
      style={{
        background:
          "linear-gradient(to bottom, rgba(58, 172, 89, 0.08), rgba(58, 172, 89, 0.08) 50%, #fff 50%, #fff 100%)",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <div className="container">
        <h1 className="h1-title mb-0">
          <span className="text-green">Profit</span> calculation
        </h1>
        <h4 className="text-bold pt-2 mb-0">Number of plots</h4>
        <p className="text-secondary pt-1 mb-0">of size 101,4 GiB, k=32</p>
        <input type="range" class="form-range mt-4 mb-3" id="customRange1" />
        <div className="row">
          <div className="col-5 d-flex align-items-center">
            <input
              type="text"
              className="form-control text-bold"
              value="5595"
            />
            <span className="text-small text-secondary ms-1">Plots</span>
          </div>
          <div className="col-7 d-flex">
            <input
              type="text"
              className="form-control text-bold"
              value="0,541"
            />
            <select className="form-select  ms-1" aria-label="PiB">
              <option selected value="1">
                PiB
              </option>
              <option value="2">BiP</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card mt-3">
              <div className="card-body">
                <h4 className="text-bold pt-3 mb-2">Estimated Earings</h4>
                <p className="text-secondary text-small mb-0">
                  The simplifed view is based on a snapshot of today's price and
                  a constant total network space. Use the advanced mode to
                  simulate earings over time with netspace growth taken into
                  account
                </p>
                <div className="row pb-3">
                  <div className="col-6">
                    <Stats
                      caption="Hourly XCH"
                      value="0.0285"
                      duration="hour"
                    />
                    <Stats caption="Dayly XCH" value="0.6845" duration="day" />
                    <Stats
                      caption="Monthly XCH"
                      value="20.8345"
                      duration="month"
                    />
                  </div>
                  <div className="col-6">
                    <Stats
                      caption="Hourly USD"
                      value="$30.69"
                      duration="hour"
                    />
                    <Stats caption="Dayly USD" value="$736.52" duration="day" />
                    <Stats
                      caption="Monthly USD"
                      value="$22.42k"
                      duration="month"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-align mt-3">
          <a href="#" class="btn btn-green">
            <img
              src="/plus.png"
              style={{
                width: "24px",
                verticalAlign: "middle",
                marginRight: "12px",
              }}
            />
            <span style={{ lineHeight: "24px", verticalAlign: "middle" }}>
              Connect miner
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="container-fluid">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="h1-title">Community</h1>
            <p className="mb-0">
              Join 4745 members of the Chia farm community from 53 countries!
            </p>
            <div className="row pt-4">
              <div
                className="col-6"
                style={{
                  borderRight: "1px solid rgba(196, 196, 196, 0.2)",
                }}
              >
                <a
                  href="https://t.me/joinchat/zIGz5E00IV0wMTEy"
                  className="community-link d-flex justify-content-center flex-column"
                  target="_blank"
                >
                  <img height="40" src="./telegram.svg" />
                  <div className="pt-3 text-center">Join Telegram</div>
                </a>
              </div>
              <div className="col-6">
                <a
                  href="#"
                  className="community-link d-flex justify-content-center flex-column"
                  target="_blank"
                >
                  <img height="34" src="./discord.svg" />
                  <div className="pt-4 text-center">Join Discord</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  return (
    <div id="connectModal" className="modal fade">
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <h1 className="h1-title">Connect new&nbsp;miner</h1>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <a href="#" class="btn btn-green">
              <span style={{ lineHeight: "24px", verticalAlign: "middle" }}>
                Check connection
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const menus = [
    { icon: "", caption: "Home", link: "#home" },
    {
      icon: "",
      caption: "Connect",
      link: null,
      button: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#connectModal",
      },
    },
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
          {menus.map(({ icon, caption, link, button = {} }) => (
            <li class="nav-item text-center" style={{ flex: "1 1" }}>
              <a
                class={`nav-link ${link === activeLink ? "active" : ""}`}
                aria-current={caption}
                href={button ? null : link}
                {...button}
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
