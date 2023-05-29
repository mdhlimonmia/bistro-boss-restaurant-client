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
      <div className=" mx-5 lg:mx-32 bg-black text-white text-center items-center my-12 h-30">
        <p className="text-2xl py-5" >Call Us: +88 0192345678910</p>
      </div>
    </div>
  );
};

export default Home;
