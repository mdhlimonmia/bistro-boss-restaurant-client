const FoodCard = ({card}) => {
    const {image, name, recipe} = card;
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
          <button className="btn btn-outline btn-warning">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
