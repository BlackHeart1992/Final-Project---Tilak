const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const Game = require("./game");
const Clock = require("./clock");
const SignUp = require("./signup");
const Home = require("./home");
const About = require("./about");
const Contact = require("./contact");
const Hello = require("./hello");
const Calculator = require("./calculator");
const Footer = require("./footer");
const Effect = require("./effect");
const MovieSearch = require("./movieSearch");
const ClickCounter = require("./clickCounter");
const RandomNumber = require("./randomNumber");
const LoginForm = require("./loginForm");

function App() {
  let pageTitle = "Our React App + Weather App";
  let navLinks = ["Home", "About", "Contact"];
  return (
    <BrowserRouter>
      <Nav title={pageTitle} />
      <Clock />
      <main>
        <Nav title={pageTitle} navLinks={navLinks} />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/hello/:name" children={<Hello />} />
          <Route path="/add/:x/:y" children={<Calculator />} />
        </Switch>
        <Effect />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

module.exports = App;
