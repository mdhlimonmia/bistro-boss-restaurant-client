import { BiPhoneCall } from "react-icons/bi";

const ContactCard = ({logo, title, text}) => {
    return (
        <div className="border lg:w-80">
            <div className="flex justify-center text-4xl py-2 text-white bg-[#D1A054]">
                <BiPhoneCall></BiPhoneCall>
            </div>
            <div className="mx-5 mb-5 bg-[#F3F3F3] text-center text-black space-y-2 p-8">
                <h2 className="text-3xl uppercase">Phone</h2>
                <p>0178 9795 555</p>
            </div>
        </div>
    );
};

export default ContactCard;