
import { BiPhoneCall, BiLocationPlus, BiTime } from "react-icons/bi";

const ContactCard = ({logo, title, text}) => {
    return (
        <div className="border lg:w-70 lg:my-12">
            <div className="flex justify-center text-4xl py-2 text-white bg-[#D1A054]">
                { logo === "BiPhoneCall" && <BiPhoneCall></BiPhoneCall> }
                { logo === "BiLocationPlus" && <BiLocationPlus></BiLocationPlus> }
                { logo === "BiTime" && <BiTime></BiTime> }
            </div>
            <div className="mx-5 mb-5 bg-[#F3F3F3] text-center text-black space-y-2 pt-3 item-center h-32">
                <h2 className="text-3xl uppercase">{title}</h2>
                <p className="" >{text}</p>
            </div>
        </div>
    );
};

export default ContactCard;