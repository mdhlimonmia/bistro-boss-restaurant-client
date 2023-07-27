import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsSendCheck } from "react-icons/bs";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const onSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const review = {name: user?.displayName, recipe_name: form.name.value, rating: parseInt(form.rating.value), details: form.details.value, suggestion: form.suggestion.value};
        // console.log(parseInt(form.rating.value) + 9);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thanks For Your Suggestion.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <SectionTitle heading="GIVE A REVIEW..." subtitle="Sharing is Caring!!!"></SectionTitle>
            <div>
                <form onSubmit={onSubmit} >
                    <div className="w-[700px] h-[700px] flex flex-col justify-center mx-auto items-center gap-5 bg-[#F3F3F3]">
                        <div name ="" className="rating rating-lg rating-half">
                            <input type="radio" name="rating" value={0} className="rating-hidden" />
                            <input type="radio" name="rating" value={0.5} className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" value={1} className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" value={1.5} className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating" value={2} className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" value={2.5} className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" value={3} className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" value={3.5} className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" value={4} className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating" value={4.5} className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating" value={5} className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        </div>
                        <div>
                            <p>Which recipe you liked most?</p>
                            <input type="text" name="name" className="w-[400px] h-[40px] rounded-md pl-2" placeholder="Recipe Name" />
                        </div>
                        <div>
                            <p>Do you have any suggestion for us?</p>
                            <input type="text" name="suggestion" className="w-[400px] h-[40px] rounded-md pl-2" placeholder="Sugggestion" />
                        </div>
                        <div>
                            <p>Kindly express your care in a short way.</p>
                            <textarea name="details" className="w-[400px] h-60 p-4 rounded-md" placeholder="Review in detail"></textarea>
                        </div>
                        <button type="submit" className="btn flex mx-auto bg-[#D1A054] border-0 hover:bg-[#D99904] my-5">Send Review<BsSendCheck className="text-[28px] pl-1"></BsSendCheck></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;