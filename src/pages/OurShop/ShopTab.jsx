import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../components/useMenu/useMenu";
import FoodCards from "../../components/FoodCards/FoodCards"

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
          <FoodCards cards={salad} ></FoodCards>
        </TabPanel>
        <TabPanel>
          <FoodCards cards={pizza} ></FoodCards>
        </TabPanel> 
        <TabPanel>
          <FoodCards cards={soups} ></FoodCards>
        </TabPanel>
        <TabPanel>
          <FoodCards cards={desserts} ></FoodCards>
        </TabPanel>
        <TabPanel>
          <FoodCards cards={drinks} ></FoodCards>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
