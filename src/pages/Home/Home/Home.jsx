import FoodCards from "../../../components/FoodCards/FoodCards";
import FoodMenu from "../../../components/FoodMenu/FoodMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/useMenu/useMenu";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import ChefService from "../ChefService/ChefService";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [menu] = useMenu();
  const items = menu.filter((item) => item.category === "popular");
  const cards = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>BISTRO | HOME</title>
      </Helmet>
      
      <Banner></Banner>
      <Catagories></Catagories>
      <ChefService></ChefService>
      <SectionTitle
        subtitle={"Check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <FoodMenu items={items}></FoodMenu>
      <div className=" mx-5 lg:mx-32 bg-black text-white text-center items-center my-12 h-30">
        <p className="text-2xl py-5">Call Us: +88 0192345678910</p>
      </div>
      <SectionTitle
        subtitle={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <FoodCards cards={cards}></FoodCards>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
