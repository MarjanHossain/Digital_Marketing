

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="lg:w-6/12 mx-auto lg:py-10 py-4 space-y-4 text-center">

            <h1 className="text-[red] text-4xl font-sans font-bold border-y-4 py-3 uppercase">{heading}</h1>
            <p className="text-lg text-white lg:text-2xl font-bold font-sans capitalize lg:pt-4"> {subHeading} </p>
        </div>
    );
};

export default SectionHeading;