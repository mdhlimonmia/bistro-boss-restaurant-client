import FoodMenu from "../../../components/FoodMenu/FoodMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/useMenu/useMenu";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import ChefService from "../ChefService/ChefService";

const Home = () => {
  const [menu] = useMenu()
  const  items = menu.filter(item => item.category === 'popular');
  return (
    <div>
      <Banner></Banner>
      <Catagories></Catagories>
      <ChefService></ChefService>
      <div className="my-12">
      <SectionTitle
            subtitle={"Check it out"}
            heading={"from our menu"}
        ></SectionTitle>
      <FoodMenu
         items={items}
      ></FoodMenu>
      </div>
    </div>
  );
};

export default Home;
