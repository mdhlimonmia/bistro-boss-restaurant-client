import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddReview = () => {
    return (
        <div>
            <SectionTitle heading="GIVE A REVIEW..." subtitle="Sharing is Caring!!!"></SectionTitle>
            <div>
                <form action="">
                    <div className="w-[700px] h-[700px] flex flex-col justify-center mx-auto items-center gap-10 bg-[#F3F3F3]">
                        <div className="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        </div>
                        <div>
                            <p>Which recipe you liked most?</p>
                            <input type="text" className="w-[400px] h-[40px] rounded-md pl-2" placeholder="Recipe Name" />
                        </div>
                        <div>
                            <p>Do you have any suggestion for us?</p>
                            <input type="text" className="w-[400px] h-[40px] rounded-md pl-2" placeholder="Sugggestion" />
                        </div>
                        <div>
                            <p>Kindly express your care in a short way.</p>
                            <textarea className="w-[400px] h-60 p-4 rounded-md" placeholder="Review in detail"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;