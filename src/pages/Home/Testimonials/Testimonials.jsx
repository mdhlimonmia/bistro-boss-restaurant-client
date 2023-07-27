import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mx-5 lg:mx-32">
      <SectionTitle
        heading="TESTIMONIALS"
        subtitle="What Our Clients Say"
      ></SectionTitle>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="px-20 text-center items-center flex flex-col space-y-5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="text-5xl text-black"><FaQuoteLeft></FaQuoteLeft></p>
                  <p>{review.details}</p>
                  <h4 className="uppercase text-yellow-500 text-xl">{review.name}</h4>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
