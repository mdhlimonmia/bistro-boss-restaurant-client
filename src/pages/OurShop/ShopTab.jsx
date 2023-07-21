import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../components/useMenu/useMenu";
import FoodCarts from "../../components/FoodCarts/FoodCarts"

const ShopTab = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div className="my-12">
      <Tabs>
        <TabList className= "py-5 text-center lg:mx-32">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <FoodCarts carts={salad} ></FoodCarts>
        </TabPanel>
        <TabPanel>
          <FoodCarts carts={pizza} ></FoodCarts>
        </TabPanel> 
        <TabPanel>
          <FoodCarts carts={soups} ></FoodCarts>
        </TabPanel>
        <TabPanel>
          <FoodCarts carts={desserts} ></FoodCarts>
        </TabPanel>
        <TabPanel>
          <FoodCarts carts={drinks} ></FoodCarts>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
