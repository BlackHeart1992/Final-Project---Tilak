function Nav(props) {
  let { title, navLinks } = props; // Destructuring
  let links = navLinks.map(function (text) {
    return <a href="/">{text}</a>;
  });
  return (
    <nav>
      <h2>{title}</h2>
      {links}
      <hr />
    </nav>
  );
}

// Export it to use in app.js
module.exports = Nav;
