const React = require("react");
const NavbarStyle = require("./NavbarStyle.css");

class Navbar extends React.Component {
  render() {
    const pages = ["Home", "Resources", "Priorities-List", "Solving-Boredom"];
    const navbarLinks = pages.map(page => {
      return (
        <a className="links" href={"/" + page}>
          {page}
        </a>
      );
    });

    return (
      <div className="header">
        <h1>Hackathon COVID-19</h1>
        <nav className="links">{navbarLinks}</nav>
      </div>
    );
  }
}

module.exports = Navbar;
