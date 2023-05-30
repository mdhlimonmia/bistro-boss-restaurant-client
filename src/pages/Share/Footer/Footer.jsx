import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-[300px]">
      <div className="flex">
        <div className="bg-[#1F2937] w-1/2  py-16 lg:pl-32 text-center text-white space-y-2 ">
          <h1 className="text-3xl">Contact Us</h1>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div> 
        <div className="bg-[#111827] w-1/2  py-16 lg:pr-32 text-center text-white space-y-3">
          <h1 className="text-3xl">Follow US</h1>
          <p>Join us on social media</p>
          <div className="flex gap-5 justify-center text-3xl">
            <RiFacebookFill></RiFacebookFill>
            <RiInstagramFill></RiInstagramFill>
            <RiTwitterFill></RiTwitterFill>
          </div>
        </div>
      </div>
      <div>
        <p className="bg-[#151515] text-center bottom-0 ">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
      </div>
    </div>
  );
};

export default Footer;
