
const SectionTitle = ({heading, subtitle}) => {
    return (
        <div className="m-12 mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-500  mb-2 mx-auto italic w-auto">-----{subtitle}-----</p>
            <h2 className="text-3xl text-black border-y-2 p-2 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;