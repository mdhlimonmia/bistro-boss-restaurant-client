import MenuItem from "./MenuItem";

const FoodMenu = ({ items }) => {
  return (
    <div className="my-12">
      <div className="grid lg:grid-cols-2 gap-10 mx-5 lg:mx-32">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
