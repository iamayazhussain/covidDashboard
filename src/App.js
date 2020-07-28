import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Rnd from "./Components/Rnd";
import NavBar from "./Components/Common/NavigationBar";
import Footer from "./Components/Common/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/rnd" component={Rnd}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
