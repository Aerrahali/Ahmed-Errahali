import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";

//projectspages
import Bidhouse from "./Pages/Projects/Bidhouse";
import Maresme from "./Pages/Projects/Maresme";
import Tenedores from "./Pages/Projects/Tenedores";
import Bestprotein from "./Pages/Projects/Bestprotein";
import Floriberia from "./Pages/Projects/Floriberia";
import Super3 from "./Pages/Projects/Super3";
import Uocify from "./Pages/Projects/Uocify";
import Agrifm from "./Pages/Projects/Agrifm";
import Nutri from "./Pages/Projects/Nutri";
import Aviforum from "./Pages/Projects/Aviforum";
import LPN from "./Pages/Projects/LPN";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfliosPage />
            </Route>
            <Route path="/portfolios/bidhouse" exact>
              <Bidhouse />
            </Route>
            <Route path="/portfolios/maresme" exact>
              <Maresme />
            </Route>
            <Route path="/portfolios/5tenedores" exact>
              <Tenedores />
            </Route>
            <Route path="/portfolios/bestprotein" exact>
              <Bestprotein />
            </Route>
            <Route path="/portfolios/floriberia" exact>
              <Floriberia />
            </Route>
            <Route path="/portfolios/super3" exact>
              <Super3 />
            </Route>
            <Route path="/portfolios/uocify" exact>
              <Uocify />
            </Route>
            <Route path="/portfolios/agrifm" exact>
              <Agrifm />
            </Route>
            <Route path="/portfolios/nutri" exact>
              <Nutri />
            </Route>
            <Route path="/portfolios/aviforum" exact>
              <Aviforum />
            </Route>
            <Route path="/portfolios/lpn" exact>
              <LPN />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
