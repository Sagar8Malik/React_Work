import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container nav_container">
        <ul className="navbar-nav ml-auto nav_list">
          <div className="nav-side">
            <li className="nav-item">
              <i className="fa fa-home fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Dashboard
              </a> 
            </li>
            <li className="nav-item opa-50">
              <i className="fa fa-money fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Wallet
              </a>
            </li>
            <li className="nav-item opa-50">
              <i className="fa fa-line-chart fa-lg mr-2"></i>{" "}
              {/* Increase icon size */}
              <a className="nav-link" href="#">
                Investments
              </a>
            </li>
          </div>
          <li className="nav-item">
            <div className="ml-auto">
              <a className="nav-link" href="#">
                <i className="fa fa-cog fa-lg"></i> {/* Increase icon size */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
