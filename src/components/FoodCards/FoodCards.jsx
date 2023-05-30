import FoodCard from "./FoodCard";

const FoodCards = ({cards}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-32 gap-5">
            {
                cards?.map(card => <FoodCard
                key = {card._id}
                card = {card}
                ></FoodCard>)
            }
        </div>
    );
};

export default FoodCards;