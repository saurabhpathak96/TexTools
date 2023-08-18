import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <div>
            <div
              className={
                "form-check form-switch float-right" +
                (props.mode === "dark" ? " text-light" : " text-dark")
              }
            >
              <input
                className="form-check-input button"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label button"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </ div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  title: "No title",
  aboutText: "Not defined",
};
