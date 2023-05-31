import Cover from "../Share/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg"
import ShopTab from "./ShopTab";
const OurShop = () => {
    return (
        <div>
            <Cover img={shopImg} title = "Our Shop"  ></Cover>
            <ShopTab></ShopTab>
        </div>
    );
};

export default OurShop;