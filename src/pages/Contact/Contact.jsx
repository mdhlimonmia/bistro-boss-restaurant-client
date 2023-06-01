import Cover from "../Share/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <Cover img={contactImg} title="contact us"></Cover>
      <SectionTitle heading="our location" subtitle="Visit Us"></SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center lg:mx-32 ">
        <ContactCard
          logo="BiPhoneCall"
          title="phone"
          text="+38 (012) 34 56 789"
        ></ContactCard>
        <ContactCard
          logo="BiLocationPlus"
          title="ADDRESS"
          text="+38 (012) 34 56 789"
        ></ContactCard>
        <ContactCard
          logo="BiTime"
          title="time"
          text={`Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00`}
        ></ContactCard>
      </div>
      <SectionTitle
        heading="CONTACT FORM"
        subtitle="Send Us a Message"
      ></SectionTitle>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
