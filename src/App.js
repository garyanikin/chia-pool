import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
    </div>
  );
}

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
