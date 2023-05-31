import Cover from "../Share/Cover/Cover"
import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import ContactCard from "./ContactCard";
const Contact = () => {
    return (
        <div>
            <Cover img={contactImg} title= "contact us" ></Cover>
            <SectionTitle heading= "our location" subtitle = "Visit Us" ></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center lg:mx-32 ">
                <ContactCard></ContactCard>
                <ContactCard></ContactCard>
                <ContactCard></ContactCard>
            </div>
        </div>
    );
};

export default Contact;