import { Link } from "react-router-dom";

const NavBar = () => {
    //small devices
    const isNavbarDisabled = window.matchMedia('(max-width: 1024px)').matches;
    if (isNavbarDisabled) {
        return(
            <div className="flex flex-cols gap-5 w-fit text-sm ">
                <button className="hover:font-semibold text-primaryTitle"><Link to='/MKIB/hall-of-Fame'>Hall of Fame</Link></button>
                <button className="hover:font-semibold text-primaryTitle"><Link to='/MKIB/archive'>Test Archive</Link></button>
                <Link to='/MKIB/about'><button className="text-primarySubTitle">About</button></Link>
                <a href="mailto: thitiwatipst@gmail.com"><button className="text-primarySubTitle">Contact</button></a>
            </div>
        );
    } else return (
        <div className="sticky top-0 grid lg:grid-rows gap-5 w-fit ">
            <div className="mt-30">
                <span><Link to='/MKIB/'><img className="mt-30" src="./assets/logo/int_bee_logo.png"></img></Link></span>
            </div>
            <div className="text-xl font-bold text-center"> MWIT-KVIS Integration Bee Archive </div>
            <button className="btn-primary  hover:font-semibold"><Link to='/MKIB/hall-of-Fame'>Hall of Fame</Link></button>
            <button className="btn-primary  hover:font-semibold"><Link to='/MKIB/archive'>Test Archive</Link></button>
            <div className="flex flex-row gap-3  text-primarySubTitle items-center justify-center">
                <Link to='/MKIB/about'><button >About</button></Link>
                <a href="mailto: thitiwatipst@gmail.com"><button>Contact</button></a>
            </div>
        </div>
    )
}
export default NavBar;
