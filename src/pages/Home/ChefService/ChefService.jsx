import img from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
  return (
    <div className="mx-5 lg:mx-32">
      <div
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-white lg:w-2/3 h-[200px] m-20">
      <div className="hero-content text-center text-neutral-content lg:py-8">
        <div className=" text-slate-950 ">
          <h1 className="mb-5 text-3xl uppercase">Bistro Boss</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magnam veniam nulla vel sit ullam, numquam ex fugiat! Mollitia ab natus ratione quam illo voluptates, eos eius id ipsa velit!
          </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ChefService;