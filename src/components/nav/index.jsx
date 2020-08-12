import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleIsOpen = () => {
    const isOpen = this.state.isOpen;

    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const menuClass = this.state.isOpen ? "navigation-links isOpen" : "navigation-links";

    return (
      <header>
        <div className="logo">
          <Link to="/">CIOLTEA RENATA</Link>
        </div>

        <div className="nav">
          <ul className={menuClass}>
            <div className="navigation-close" onClick={this.toggleIsOpen}>X</div>
            <li>
              <Link onClick={this.toggleIsOpen} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={this.toggleIsOpen} to="/myResume">My Online CV</Link>
            </li>
            <li>
              <Link onClick={this.toggleIsOpen} to="/projects">Projects</Link>
            </li>
            <li>
              <Link onClick={this.toggleIsOpen}to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="burger-menu" onClick={this.toggleIsOpen}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
