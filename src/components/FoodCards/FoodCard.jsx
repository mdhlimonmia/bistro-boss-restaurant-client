const FoodCard = ({card}) => {
    const {image, name, recipe, price} = card;
  return (
    <div className="card card-compact bg-white shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline btn-warning bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Card</button>
        </div>
      </div>
      <p className="absolute right-4 top-2 bg-[#e79924] text-white rounded px-2 font-bold">${price}</p>
    </div>
  );
};

export default FoodCard;
