import { Link } from "react-router-dom";

const Card = ({ cardInfo }) => {
    const { image, link } = cardInfo;

    return (
        <section className="shadow-xl rounded-xl "
        // data-aos="zoom-in"
        // data-aos-duration="500"
        >
            <a href={link}>

                {/* Card */}
                <div className=" " >
                    {/* <h1 className=" bg-[#062265] text-white text-center py-2 lg:py-3 text-2xl font-bold uppercase">{title}</h1> */}
                    {/* //!===========Updated Link here ============ */}

                    <div className="overflow-hidden">
                        <a href='/'> <img src={image} alt="" className="transition-transform duration-300 hover:scale-110 lg:h-[220px] lg:w-[320px] h-[140px] w-full " /></a>
                    </div>
                    {/* ---------Button------ */}
                    {/* <div className="flex justify-center">
                        <button
                            className="bg-green-500  lg:px-12 px-8  py-3  text-white active:scale-95   font-semibold cursor-pointer
    hover:bg-white border border-primary 
    ease-in-out lg:text-lg w-full lg:mx-2 m-2 text-center hover:bg-transparent hover:border hover:text-black rounded-md transition-all duration-500 uppercase"
                        >
                            View</button>
                    </div> */}
                </div>
            </a>
        </section>
    );
};

export default Card;