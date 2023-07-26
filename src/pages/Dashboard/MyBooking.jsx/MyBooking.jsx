import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseReservation from "../../../components/UseReservation/UseReservation";
import { RiDeleteBin5Line } from "react-icons/ri";

const MyBooking = () => {
    const [tables, refetch] = UseReservation();
    // const totalPerson = tables.reduce((acc, table) => acc + table.person, 0);

    const handelDelete = (table)=>{
        console.log(table._id);
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
            fetch(`http://localhost:5000/reserve/${table._id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire(
                    'Deleted!',
                    'Your Booking has been deleted.',
                    'success'
                  )
                }
              })
          }
        })
    
      }

    return (
        <div>
        <SectionTitle heading="MY BOOKINGS" subtitle="Excellent Ambience"></SectionTitle>
  
        <div  className="mx-[160px] uppercase text-xl font-bold py-3 flex justify-between">
          <h1>Total Booking: {tables.length}</h1>
          {/* <h1>total price: ${totalPerson}</h1> */}
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
                <th>Name</th>
                <th>Booking Date</th>
                <th>Time</th>
                <th>Number of Person</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
  
              {tables.map((table, index) => (
                <>
                  <tr key={table._id} className="my-10">
                    <th>
                      <label>
                        <p>{index + 1}</p>
                      </label>
                    </th>
                    <td>
                      <div>
                        <div className="font-bold">{table.name}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{table.date}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{table.time}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{table.person}</div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {/* {c.price} */}
                      </span>
                    </td>
                    <th>
                      <button onClick={() => handelDelete(table)} className="btn btn-ghost hover:text-3xl text-2xl"><RiDeleteBin5Line></RiDeleteBin5Line></button>
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

export default MyBooking;