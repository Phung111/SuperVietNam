import Home from "components/Main/Body/Content/Primary/Home";
import Products from "components/Main/Body/Content/Primary/Products";
import AboutUs from "components/Main/Body/Content/Primary/AboutUs";
import Review from "components/Main/Body/Content/Primary/Review";

export default function Primary({ activeTab }) {
  return (
    <>
      {activeTab === "home" && <Home />}
      {activeTab === "products" && <Products />}
      {activeTab === "about" && <AboutUs />}
      {activeTab === "review" && <Review />}
    </>
  );
}
