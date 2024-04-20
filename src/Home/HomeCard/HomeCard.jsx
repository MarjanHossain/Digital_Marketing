import { CardData } from "../../Data";
import SectionHeading from "../../componet/SectionHeading";
import Card from './Card';

const HomeCard = () => {
    return (
        <section className="max-w-[1440px] lg:mx-40 mx-2 lg:pb-10 py-5">
            {/* --------Heading------- */}
            <SectionHeading
                heading={"OUR ACTORS"}
                subHeading={"Click on their image to watch them do the unspeakable. "}
            />
            {/*//? =======HomeCard====== */}
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 lg:gap-6 space-y-0 lg:space-y-0 " >
                {
                    CardData.map((cardInfo, i) =>
                        <Card key={i} cardInfo={cardInfo}>

                        </Card>)
                }
            </div>
        </section>
    );
};

export default HomeCard;