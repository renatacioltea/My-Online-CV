import React from "react";

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
          <a href="/">CIOLTEA RENATA</a>
        </div>

        <div className="nav">
          <ul className={menuClass}>
            <div className="navigation-close" onClick={this.toggleIsOpen}>X</div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/myResume">My Online CV</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
