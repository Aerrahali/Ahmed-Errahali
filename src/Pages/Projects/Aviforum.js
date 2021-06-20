import React from "react";
import BidhouseItems from "../../Components/projectItems/BidhouseItems";
import Tittle from "../../Components/Tittle";
import portfolios from "../../Components/allProjects/allAviforum";
import { useState } from "react";

function Bidhouse() {
  const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={"aviFORUM"} span={"aviFORUM"} />
      </div>
      <div className="portfolios-data">
        <BidhouseItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default Bidhouse;
