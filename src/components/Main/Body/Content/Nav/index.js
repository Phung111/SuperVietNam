import React, { useState } from "react";
import Primary from "components/Main/Body/Content/Primary";

export default function Nav() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <div
          className={activeTab === "home" ? "active" : ""}
          onClick={() => handleTabClick("home")}
        >
          Home
        </div>
        <div
          className={activeTab === "products" ? "active" : ""}
          onClick={() => handleTabClick("products")}
        >
          Products
        </div>
        <div
          className={activeTab === "about" ? "active" : ""}
          onClick={() => handleTabClick("about")}
        >
          About Us
        </div>
        <div
          className={activeTab === "review" ? "active" : ""}
          onClick={() => handleTabClick("review")}
        >
          Review
        </div>
      </div>

      <Primary activeTab={activeTab} />
    </>
  );
}
