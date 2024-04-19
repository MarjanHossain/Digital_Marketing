import { AiOutlineCopyright } from "react-icons/ai"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="lg:pb-10 pb-5">
            {/* //? Copy Rights */}
            <div className="flex items-center gap-1 justify-center">
                <span className="text-2xl"><AiOutlineCopyright /></span>
                <p className="text-xl font-semibold text-white">All Rights Reserved SA <span className="text-cyan-500">{currentYear}</span></p>
            </div>
        </footer>
    );
};

export default Footer;