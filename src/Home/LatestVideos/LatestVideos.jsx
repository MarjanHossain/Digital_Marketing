import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";
// import './LatestNews.css'
import './LatestVideos.css'
// import LatestNewsCard from './LatestNewsCard';
// import CustomHeading from './../../components/CustomHeading';
import { CardData } from "../../Data";
import LatestCard from "./LatestCard";
import SectionHeading from "../../componet/SectionHeading";

const CustomArrow = () => null;
const LatestVideos = () => {
    // const [latestNewsData, setLatestNewsData] = useState([]);
    // useEffect(() => {
    //     fetch("latestNews.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setLatestNewsData(data);

    //         })
    // }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: <CustomArrow />,
                    nextArrow: <CustomArrow />,
                }
            }
        ]
    };


    return (
        <section
            className="lg:mb-8 lg:pt-40 pt-24 px-4 lg:px-24 " >
            {/*//? -----------Header--------- */}
            <SectionHeading
                heading={"LATEST VIDEOS"}
                subHeading={"Slide to watch more. Click on the video and enjoy the fullest."}
            />
            {/*//? ====Card Map===== */}
            <div className='  lg:mb-10 mb-6 container'>
                <Slider {...settings} className="slide-test ">
                    {
                        CardData.map(cardData =>
                            <LatestCard
                                key={cardData.id}
                                cardData={cardData}
                            ></LatestCard>
                        )
                    }
                </Slider>
            </div>
            {/*//? -----------Button------- */}
            {/* <div className="flex justify-center">
                <button className="btn-primary ">See All News</button>
            </div> */}
        </section>
    );
};

export default LatestVideos;