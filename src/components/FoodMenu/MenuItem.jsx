const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-1 items-center">
      <img src={image} alt="lo" style={{'borderRadius':'0 100% 100% 100%'}} className="w-20 h-16 bg-white" />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
