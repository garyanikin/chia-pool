import React, { useEffect } from "react";
import ClipboardJS from "clipboard";
import "./App.css";
import PercentImg from "./percent.png";
import ProfitImg from "./profit.png";
import PlusImg from "./plus.png";
import ShieldImg from "./shield.png";

function App() {
  return (
    <div>
      <HomeScreen />
      <Advantages />
      <ProfitCalculation />
      <Community />
      <Modal />
      <NavBar />
    </div>
  );
}

const HomeScreen = () => {
  return (
    <div
      className="container-fluid homescreen"
      style={{
        background: "rgba(58, 172, 89, 0.08)",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <h1 className="h1-title" id="home">
          2 Simple Steps to&nbsp;Connect to&nbsp;the&nbsp;Pool
        </h1>
        <div className="row">
          <div className="col-12 col-md-5">
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
                        Pool <span className="text-bold font-standart">></span>{" "}
                        Pool address
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center"
                  style={{ padding: "10px 24px 20px" }}
                >
                  <a href="#" className="btn">
                    View Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-2 d-md-flex flex-md-row justify-content-md-center align-items-md-center"
            style={{
              padding: "8px 0 2px",
            }}
          >
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="col-12 col-md-5">
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
                  <button
                    className="btn btn-green"
                    data-bs-toggle="modal"
                    data-bs-target="#connectModal"
                  >
                    <img
                      src={PlusImg}
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
                  </button>
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
      image: PercentImg,
      caption: "Low fee",
    },
    {
      image: ProfitImg,
      caption: "Automatic payments every 10 min",
    },
    {
      image: ShieldImg,
      caption: "Secured servers",
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: "40px" }}>
      <h1 className="h1-title" style={{ padding: "40px 0 20px" }}>
        Our Advanteges
      </h1>
      <div className="row">
        {advantages.map(({ image, caption }, index) => (
          <div
            className="col-12 col-md-4 advantages"
            style={{
              paddingTop: "10px",
            }}
          >
            <div className="row">
              <div className="col-4 col-md-12 text-center">
                <img
                  style={{ maxWidth: "96px", maxHeight: "96px" }}
                  src={image}
                />
              </div>
              <div className="col-8 col-md-12 d-flex align-items-center justify-content-md-center py-3">
                {caption}
              </div>
            </div>
            {index < advantages.length - 1 ? (
              <div
                className="col-12 d-block d-sm-block d-md-none"
                style={{
                  marginTop: "10px",
                  height: "1px",
                  background: "rgba(58, 172, 89, 0.24)",
                }}
              ></div>
            ) : null}
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
      className="container-fluid calculator-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(58, 172, 89, 0.08), rgba(58, 172, 89, 0.08) 50%, #fff 50%, #fff 100%)",
        paddingBottom: "40px",
        paddingTop: "40px",
      }}
    >
      <div className="container">
        <h1 className="h1-title mb-0" id="calculator">
          <span className="text-green">Profit</span> calculation
        </h1>
        <div>
          <h4 className="text-bold pt-2 mb-0">Number of plots</h4>
          <p className="text-secondary pt-1 mb-0">of size 101,4 GiB, k=32</p>
        </div>
        <input type="range" className="form-range mt-4 mb-3" id="profitRange" />
        <div className="row profitInput">
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
                <div className="row align-items-center">
                  <div className="col-12 col-md-4 col-lg-3 d-md-flex justify-content-md-center">
                    <h4 className="text-bold pt-3 mb-2">Estimated Earings</h4>
                  </div>
                  <div className="col-12 col-md-8">
                    <p className="text-secondary text-small mb-0">
                      The simplifed view is based on a snapshot of today's price
                      and a constant total network space. Use the advanced mode
                      to simulate earings over time with netspace growth taken
                      into account
                    </p>
                  </div>
                </div>
                <div className="row pb-3 ">
                  <div className="col-6 col-md-12 d-md-flex justify-content-md-around">
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
                  <div className="col-6 col-md-12 d-md-flex justify-content-md-around">
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
        <div className="text-center mt-3">
          <button
            data-bs-toggle="modal"
            data-bs-target="#connectModal"
            className="btn btn-green profitBtn"
          >
            <img
              src={PlusImg}
              style={{
                width: "24px",
                verticalAlign: "middle",
                marginRight: "12px",
              }}
            />
            <span style={{ lineHeight: "24px", verticalAlign: "middle" }}>
              Connect miner
            </span>
          </button>
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
            <h1 className="h1-title" id="community">
              Community
            </h1>
            <p className="mb-0 communityText">
              Join 4745 members of the Chia farm community from 53 countries!
            </p>
            <div className="row pt-4 justify-content-md-center">
              <div
                className="col-6 col-md-3"
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
              <div className="col-6 col-md-3">
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
  const [isCopied, setCopied] = React.useState();
  const [wallet, setWallet] = React.useState();
  const [isLoading, setLoading] = React.useState();
  const handleInput = (e) => setWallet(e.target.value);
  const handleConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(".clpbrd");

    clipboard.on("success", function (e) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }, []);

  return (
    <div id="connectModal" className="modal fade">
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <h1 className="h1-title">Connect new&nbsp;miner</h1>
              </div>
              <div className="col-1">
                <span className="text-bold modal-num">1.</span>
              </div>
              <div className="col-11">
                <div className="modal-text">
                  Enter our address in Chia client
                </div>
                <div className="text-small text-secondary mt-2">
                  Pool <span className="text-standard">></span> In the upper
                  right corner of the menu
                </div>
                <div className="mt-3" style={{ position: "relative" }}>
                  <input
                    disabled
                    className="form-control modal-input"
                    value="https://pool.topxch.com/api/endpoint"
                    type="text"
                  />
                  <button
                    className="btn btn-green btn-sm clpbrd"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "2px",
                    }}
                    data-clipboard-text="https://pool.topxch.com/api/endpoint"
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <div className="col-1 mt-5">
                <span className="text-bold modal-num">2.</span>
              </div>
              <div className="col-11 mt-5">
                <div className="modal-text">Enter your wallet</div>
                <input
                  className="form-control modal-input mt-3"
                  value={wallet}
                  onChange={handleInput}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer text-center d-md-flex flex-md-row justify-content-md-start">
            <button
              className="btn btn-green"
              onClick={handleConnection}
              disabled={!wallet}
              style={{ position: "relative" }}
            >
              {isLoading
                ? [
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>,
                    <div style={{ height: "24px" }}></div>,
                  ]
                : "Check connection"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const menus = [
    { icon: "", caption: "Home", link: "#home", button: false },
    {
      icon: "",
      caption: "Connect",
      fullCaption: "Connect Miner",
      link: null,
      button: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#connectModal",
      },
    },
    { icon: "", caption: "Calculator", link: "#calculator", button: false },
    { icon: "", caption: "Community", link: "#community", button: false },
  ];

  const renderDesktop = () => (
    <nav
      id="navbar"
      className="navbar navbar-expand fixed-top bg-white d-none d-md-block"
      style={{
        boxShadow: "0px -4px 16px rgba(21, 48, 49, 0.08)",
      }}
    >
      <div className="container">
        <div
          className="row justify-content-md-center"
          style={{ width: "100%" }}
        >
          <div className="col-8">
            <ul className="navbar-nav" style={{ width: "100%" }}>
              {menus.map(
                ({ icon, caption, fullCaption, link, button = {} }) => (
                  <li
                    className="nav-item text-center py-2"
                    style={{ flex: "1 1" }}
                  >
                    <a
                      className="nav-link"
                      aria-current={fullCaption || caption}
                      href={button ? null : link}
                      {...button}
                    >
                      <span>{fullCaption || caption}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  const renderMobile = () => (
    <nav
      id="navbar"
      className="navbar fixed-bottom navbar-expand bg-white d-block d-sm-block d-md-none"
      style={{
        boxShadow: "0px -4px 16px rgba(21, 48, 49, 0.08)",
      }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav" style={{ width: "100%" }}>
          {menus.map(({ icon, caption, link, button = {} }) => (
            <li className="nav-item text-center" style={{ flex: "1 1" }}>
              <a
                className="nav-link"
                aria-current={caption}
                href={button ? null : link}
                {...button}
              >
                <div className="col-12">
                  <div className="navbar-icon">{icon}</div>
                </div>
                <div className="col-12 caption">{caption}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return [renderDesktop(), renderMobile()];
};

export default App;
