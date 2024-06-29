import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
function Header({ handleLogout }) {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo" style={{ position: "relative" }}>
                    <Link to="/Home">
                      <img
                        src={logo}
                        style={{ width: "100px", height: "100px" }}
                        alt="Logo"
                      />
                    </Link>

                    <div
                      className="logout-button"
                      style={{
                        position: "absolute",
                        top: "90%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "75px",
                        height: "40px",
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                      onClick={logout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-9 col-12"
                  style={{ marginLeft: "-80px" }}
                >
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li>
                          <a href="#services">User Name</a>
                        </li>

                        <li className="active">
                          <Link to="/Home">
                            Home <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul className="dropdown">
                            <li>
                              <a href="#services">Services</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Users </a>
                        </li>
                        <li>
                          <a href="#">
                            Pages <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/SendMessage">Send Message</Link>
                            </li>
                            <li>
                              <Link to="/createmeeting">Create Meeting</Link>
                            </li>
                            <li>
                              <a href="404.html">404 Error</a>
                            </li>
                            <li>
                              <a href="404.html">404 Error</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/Profile">Profile </Link>
                        </li>
                        <li>
                          <Link to="/ContactUs">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-12" style={{ marginLeft: "80px" }}>
                  <div
                    className="get-quote"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Link
                      to="/SendMessage"
                      className="btn"
                      style={{ marginRight: "10px" }}
                    >
                      Send Message
                    </Link>
                    <Link
                      to="/createmeeting"
                      className="btn"
                      style={{ marginRight: "10px" }}
                    >
                      Create Meeting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
