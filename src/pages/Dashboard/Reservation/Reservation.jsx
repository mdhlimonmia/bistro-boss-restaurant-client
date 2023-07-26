import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import ContactCard from "../../Contact/ContactCard";

const Reservation = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data, user.email);

        fetch('http://localhost:5000/reserve', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Book A Table Success.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <SectionTitle heading="BOOK A TABLE" subtitle="Reservation" ></SectionTitle>
            <div className="flex justify-center m-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 border-3 gap-10">
                        <div>
                            <p>Date*</p>
                            <input type="date"
                                {...register("date", { required: true })}
                                className="border-2 rounded w-full p-2" />
                        </div>
                        <div>
                            <p>Time*</p>
                            <input type="time"
                                {...register("time", { required: true })}
                                className="border-2 rounded w-full p-2" />
                        </div>
                        <div>
                            <p>Gust*</p>
                            <select
                                {...register("person", { required: true })}
                                className="select select-bordered w-full max-w-xs">
                                <option disabled selected >Select</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                                <option>5 Person</option>
                                <option>6 Person</option>
                            </select>
                        </div>
                        <div>
                            <p>Name*</p>
                            <input type="text" placeholder="Your Name"
                                {...register("name", { required: true })}
                                className="border-2 rounded w-full p-2" />
                        </div>
                        <div>
                            <p>Phone*</p>
                            <input type="number" name="" id="" placeholder="Phone Number"
                                {...register("number", { required: true })}
                                className="border-2 rounded w-full p-2" />
                        </div>
                        <div>
                            <p>Email*</p>
                            <input type="email" name="email" id="email" value={user?.email} readOnly
                                {...register("email", { required: true })}
                                className="border-2 rounded w-full p-2" />
                        </div>
                    </div>
                    <button type="submit" className="btn flex mx-auto bg-[#D1A054] border-0 hover:bg-[#D99904] my-5">Book A Table <MdOutlineTableRestaurant className="text-[28px] pl-1"></MdOutlineTableRestaurant></button>
                </form>
            </div>

            <SectionTitle heading="OUR LOCATION" subtitle="vist us"></SectionTitle>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center lg:mx-32 ">
                <ContactCard
                    logo="BiPhoneCall"
                    title="phone"
                    text="+38 (012) 34 56 789"
                ></ContactCard>
                <ContactCard
                    logo="BiLocationPlus"
                    title="ADDRESS"
                    text="+38 (012) 34 56 789"
                ></ContactCard>
                <ContactCard
                    logo="BiTime"
                    title="time"
                    text={`Mon - Fri: 08:00 - 22:00 Sat - Sun: 10:00 - 23:00`}
                ></ContactCard>
            </div>
        </div>
    );
};

export default Reservation;