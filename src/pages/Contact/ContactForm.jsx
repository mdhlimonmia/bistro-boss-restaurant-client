import { BsFillSendFill } from "react-icons/bs";
const ContactForm = () => {
  return (
    <div className="mx-5 lg:mx-32 bg-[#F3F3F3] p-10 mb-48">
      <div className="lg:flex gap-5  ">
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Name*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control lg:w-1/2">
          <label className="label">
            <span className="label-text text-black">Email*</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Phone*</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered"
            required
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Message*</span>
          </label>
          <input
            type="text"
            placeholder="Write your message here"
            className="input input-bordered h-40"
            required
          />
        </div>
        <div className="form-control w-48 mx-auto mt-6">
          <button className="btn border-0 text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">Send Message  <span className="ml-3"> <BsFillSendFill></BsFillSendFill></span></button>
        </div>
    </div>
  );
};

export default ContactForm;
