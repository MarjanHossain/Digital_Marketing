import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import HomeCard from "../HomeCard/HomeCard";
import LatestVideos from "../LatestVideos/LatestVideos";

const Home = () => {
    return (
        <section>
            {/* -----------home card------- */}
            <Navbar />
            <LatestVideos />
            <HomeCard />
            <Footer />

        </section>
    );
};

export default Home;