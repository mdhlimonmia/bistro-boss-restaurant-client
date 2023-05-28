import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Catagories = () => {
  return (
    <section className="my-20">
        <SectionTitle
            subtitle={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="uppercase text-4xl text-center text-white -mt-16">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="uppercase text-4xl text-center text-white -mt-16">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="uppercase text-4xl text-center text-white -mt-16">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="uppercase text-4xl text-center text-white -mt-16">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="uppercase text-4xl text-center text-white -mt-16">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagories;
