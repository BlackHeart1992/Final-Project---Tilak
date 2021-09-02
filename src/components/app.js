const Nav = require("./nav");
const Footer = require("./footer");

function App() {
  let pageTitle = "My React App";
  let navLinks = ["Home", "About", "Contact"];
  return (
    <main>
      <Nav title={pageTitle} navLinks={navLinks} />
      <h1>My React App</h1>
      <Footer />
    </main>
  );
}

module.exports = App;
