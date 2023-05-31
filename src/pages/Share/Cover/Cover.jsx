
const Cover = ({img, title}) => {
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero-overlay bg-opacity-60 lg:w-2/3 p-8 lg:p-16 text-white">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
