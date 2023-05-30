import aboutImg from "../../../assets/others/authentication2.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const AboutUs = () => {
  return (
    <div className=" bg-[#151515B2] py-16 px-auto my-12 h-[700px] items-center">
      <SectionTitle
        subtitle={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row justify-center my-auto items-center">
        <img src={aboutImg} alt="" />
        <div className="mx-5 text-left align-baseline">
          <h4 className="text-xl">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            incidunt vitae officiis libero praesentium nobis corporis sapiente
            voluptates ea? Corporis facere modi saepe hic corrupti tenetur totam
            fugit amet omnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
