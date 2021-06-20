import React from "react";

// <a href={item.link2}>{item.icon2}</a>
function BidhouseItems({ menuItem }) {
  return (
    <div className="portfolis" style={{ width: "100%" }}>
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div style={{ width: "100%" }}>
              <img width={"100%"} src={item.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BidhouseItems;
