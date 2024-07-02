import React from "react";
import Logo from "./ArchiveLogo";
import Menu from "./Menu";
import ActionLinks from "./ActionLinks";

function Header({ handleLogout, username }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <Logo />
              </div>
              <div
                className="col-lg-7 col-md-9 col-12"
                style={{ marginLeft: "-80px" }}
              >
                <Menu username={username} handleLogout={handleLogout} />
              </div>
              <div className="col-lg-2 col-12" style={{ marginLeft: "80px" }}>
                <ActionLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
