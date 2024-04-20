import { Link, useNavigate } from "react-router-dom";
// import logo from "../../src/assets/images/logo.png"
import { useState } from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
    // const navigate = useNavigate();
    // const handleAchorLink = async (e, hashroute) => {
    //     e.preventDefault();
    //     await navigate('/');
    //     window.location.hash = hashroute;
    // }
    {/* //!===========Updated Link here ============ */ }

    const menu =
        <>
            <li><a href="https://www.profitablegatecpm.com/wem2nbxbp?key=0c6879bf48802f5e379d8bb5cc47607f">Home</a></li>
            <li><a href="https://www.profitablegatecpm.com/wem2nbxbp?key=0c6879bf48802f5e379d8bb5cc47607f">About</a></li>

            <li><a href="https://www.profitablegatecpm.com/wem2nbxbp?key=0c6879bf48802f5e379d8bb5cc47607f"
            // onClick={(e) => handleAchorLink(e, 'contact')}
            >Contact Us</a></li>
        </>

    const [toggle, setToggle] = useState(false)

    return (
        <section className="lg:px-20 lg:py-8 px-4 py-5 bg-[#102C57] fixed z-20
        w-full ">
            <div className="flex justify-between" >
                {/* //!===========Updated Link here ============ */}
                <a href="https://www.profitablegatecpm.com/wem2nbxbp?key=0c6879bf48802f5e379d8bb5cc47607f">
                    <h1 className="font-bold lg:text-3xl text-2xl text-red text-cyan-500">HoTTy.<span className="text-orange-500">com</span></h1>
                </a>
                {/* <img src={logo} alt="" className="w-32 h-12" /> */}


                {/* //? Desktop */}
                <ul className="lg:flex items-center gap-10  text-[white] font-semibold text-xl hover hidden hover ">
                    {menu}
                    {/* <Link to="/login" className="btn"> Login</Link> */}
                </ul>

                {/*//?====== Mobile======= */}
                <div className="relative lg:hidden  ">
                    <div onClick={() => setToggle(!toggle)} className="text-5xl text-white">
                        {
                            toggle ?
                                <AiOutlineClose />
                                :
                                <BiMenuAltRight />
                        }
                    </div>

                    <div className={`list-none absolute right-0  bg-cyan-200 z-10 shadow-2xl px-10  py-5 text-xl space-y-4 hover font-semibold rounded-xl ${toggle ? "block" : "hidden"}`}>
                        {menu}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;