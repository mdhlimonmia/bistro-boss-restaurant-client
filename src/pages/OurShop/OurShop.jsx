import Cover from "../Share/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import ShopTab from "./ShopTab";
import { Helmet } from "react-helmet-async";
const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Our Shop</title>
      </Helmet>

      <Cover img={shopImg} title="Our Shop"></Cover>
      <ShopTab></ShopTab>
    </div>
  );
};

export default OurShop;
