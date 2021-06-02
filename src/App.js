import React, { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import "./App.css";
import PercentImg from "./percent.png";
import ProfitImg from "./profit.png";
import PlusImg from "./plus.png";
import ShieldImg from "./shield.png";
import CoinImg from "./coin.gif";
import DiscordImg from "./discord.svg";
import TelegramImg from "./telegram.svg";
import ProfitCalculation from "./ProfitCalculator";
import whenDomReady from "when-dom-ready";
import isMobile from "ismobilejs";

function App() {
  return (
    <div>
      <Loader />
      <HomeScreen />
      <Advantages />
      <ProfitCalculation PlusImg={PlusImg} />
      <Community />
      <Modal />
      <NavBar />
    </div>
  );
}

const Loader = () => {
  const [isVisible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);
  const handleLoaded = () => {
    setTimeout(() => setVisible(false), 2000);
    setTimeout(() => setHide(true), 2200);
  };
  useEffect(() => {
    whenDomReady().then(handleLoaded);
  }, []);

  return hide ? null : (
    <div className={`app-loader ${!isVisible ? "hide" : ""}`}>
      <div className="app-loader__container">
        <img src={CoinImg} width="110" height="110" />
        <div className="app-loader__title text-bold pt-4 mt-2">TopXch</div>
        <div className="app-loader__subtitle mt-2">
          Never still mining was so simple
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <div
      id="home"
      className="container-fluid homescreen"
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
                <img src={image} />
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

const Community = () => {
  return (
    <div className="container-fluid" id="community">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="h1-title">Community</h1>
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
                  <img height="40" src={TelegramImg} />
                  <div className="pt-3 text-center">Join Telegram</div>
                </a>
              </div>
              <div className="col-6 col-md-3">
                <a
                  href="https://discord.gg/aVz63cg65y"
                  className="community-link d-flex justify-content-center flex-column"
                  target="_blank"
                >
                  <img height="34" src={DiscordImg} />
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
  const ENDPOINT = "https://pool.topxch.com/api/endpoint";
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
      <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header pb-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ps-md-4 px-4 pt-0">
            <div className="row">
              <div className="col-12">
                <h1 className="h1-title pb-4 mb-3">Connect new&nbsp;miner</h1>
              </div>
              <div className="col-1">
                <span className="text-bold modal-num">1.</span>
              </div>
              <div className="col-11">
                <div className="modal-text">
                  Enter our address in Chia client
                </div>
                <div className="text-small text-secondary mt-2">
                  Pool <span className="text-standart">></span> In the upper
                  right corner of the menu
                </div>
                <div className="mt-3" style={{ position: "relative" }}>
                  <input
                    disabled
                    className="form-control modal-input"
                    value={ENDPOINT}
                    type="text"
                  />
                  <button
                    className="btn btn-green btn-sm clpbrd"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "3px",
                    }}
                    data-clipboard-text={ENDPOINT}
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
          <div className="modal-footer px-md-4 pt-md-4 pb-md-4">
            <div
              className="row"
              style={{
                width: "100%",
                marginRight: "calc(var(--bs-gutter-x)/ -2)",
                marginLeft: "calc(var(--bs-gutter-x)/ -2)",
              }}
            >
              <div className="col-md-1 d-none d-md-block"></div>
              <div className="col-12 col-md-11">
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
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
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
      </div>
    </div>
  );
};

const NavBar = () => {
  const menus = [
    { icon: "home", caption: "Home", link: "#home", button: false },
    {
      icon: "connect",
      caption: "Connect",
      fullCaption: "Connect Miner",
      link: "#connect",
      button: {
        "data-bs-toggle": "modal",
        "data-bs-target": "#connectModal",
      },
    },
    {
      icon: "calculator",
      caption: "Calculator",
      link: "#calculator",
      button: false,
    },
    { icon: "chat", caption: "Community", link: "#community", button: false },
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
        <div className="navbar-community d-flex">
          <a
            href="https://t.me/joinchat/zIGz5E00IV0wMTEy"
            className="community-link  me-3"
            target="_blank"
          >
            <img height="19" src={TelegramImg} />
          </a>
          <a
            href="https://discord.gg/aVz63cg65y"
            className="community-link ms-4"
            target="_blank"
          >
            <img height="16" src={DiscordImg} />
          </a>
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
                  <div className={`navbar-icon ${icon}`}></div>
                </div>
                <div className="col-12 caption">{caption}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

  return isMobile(window.navigator).any ? renderMobile() : renderDesktop();
};

export default App;
