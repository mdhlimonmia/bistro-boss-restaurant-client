import Cover from "../Share/Cover/Cover";

import menuBanner from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupsImg from "../../assets/menu/soup-bg.jpg"

import SectionTitle from "../../components/SectionTitle/SectionTitle"
import FoodMenu from "../../components/FoodMenu/FoodMenu"
import useMenu from "../../components/useMenu/useMenu";
const OurMenu = () => {
    const [menu] = useMenu();
    const items = menu.slice(4,8);
    const dessert = menu.filter((item) => item.category === "dessert").slice(8,14);
    const pizza = menu.filter((item) => item.category === "pizza").slice(7,13);
    const salad = menu.filter((item) => item.category === "salad").slice(0,6)
    const soups = menu.filter((item) => item.category === "soup").slice(0,6)

    return (
        <div>
            <Cover img = {menuBanner} title="Our Menu"></Cover>
            <SectionTitle heading = "TODAY'S OFFER" subtitle= "Don't miss" ></SectionTitle>
            <FoodMenu items={items}></FoodMenu>
            <Cover img = {dessertImg} title="dessert" ></Cover>
            <FoodMenu items={dessert}></FoodMenu>
            <Cover img = {pizzaImg} title="pizza" ></Cover>
            <FoodMenu items={pizza}></FoodMenu>
            <Cover img = {saladImg} title="salad" ></Cover>
            <FoodMenu items={salad}></FoodMenu>
            <Cover img = {soupsImg} title="soups" ></Cover>
            <FoodMenu items={soups}></FoodMenu>
        </div>
    );
};

export default OurMenu;