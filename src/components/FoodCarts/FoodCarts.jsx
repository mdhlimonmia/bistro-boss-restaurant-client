import FoodCard from "./FoodCart";

const FoodCarts = ({carts}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-32 gap-5">
            {
                carts?.map(card => <FoodCard
                key = {card._id}
                card = {card}
                ></FoodCard>)
            }
        </div>
    );
};

export default FoodCarts;