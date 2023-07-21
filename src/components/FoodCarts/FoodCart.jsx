import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../useCart/useCart";

const FoodCard = ({card}) => {
    const {user} = useContext(AuthContext);
    const {image, name, recipe, price, _id} = card;
    const [refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate()

    const handelAddItems = () =>{
      // console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        console.log(cartItem);
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          refetch();
          if(data.insertedId){
           // refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food added on the cart.',
                showConfirmButton: false,
                timer: 1500
              })
        }
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }

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
          <button onClick={()=>handelAddItems(card)} className="btn btn-outline btn-warning bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Card</button>
        </div>
      </div>
      <p className="absolute right-4 top-2 bg-[#e79924] text-white rounded px-2 font-bold">${price}</p>
    </div>
  );
};

export default FoodCard;
