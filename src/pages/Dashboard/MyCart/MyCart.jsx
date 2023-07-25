import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../components/useCart/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
const MyCart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((acc, c) => acc + c.price, 0);
  // console.log("totla=", totalPrice);

  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })

  }
  return (
    <div>
      <SectionTitle heading="WANNA ADD MORE?" subtitle="My Cart"></SectionTitle>

      <div  className="mx-[160px] uppercase text-xl font-bold py-3 flex justify-between">
        <h1>Total orders: {cart.length}</h1>
        <h1>total price: ${totalPrice}</h1>
        <button className="bg-[#D1A054] text-white text-[15px] px-2 rounded">PAY</button>
      </div>

      <div className="flex justify-center text-left">
        <div className="">
          <table className="md:w-[600px]">
            {/* head */}
            <tr className="bg-[#D1A054]  text-white h-[40px] !rounded-xl my-10">
              <th>
                <label>
                  <p>#</p>
                </label>
              </th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>

            {cart.map((c, index) => (
              <>
                <tr key={c._id} className="my-10">
                  <th>
                    <label>
                      <p>{index + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={c.image}
                            alt="food image"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{c.name}</div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {c.price}
                    </span>
                  </td>
                  <th>
                    <button onClick={() => handelDelete(c._id)} className="btn btn-ghost text-2xltext-white"><RiDeleteBin5Line></RiDeleteBin5Line></button>
                  </th>
                </tr>
                {/* <hr className="text-2xl w-10 text-red-700" /> */}
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
