import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        {/*Navigation bar */}
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/"> {/*Home*/}
          <Home /></Route>
         
        </Switch>

        {/*Footer*/}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
