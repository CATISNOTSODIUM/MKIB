import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="sticky top-0 grid lg:grid-rows gap-5 w-fit ">
            <div className="mt-30">
                <span><Link to='/MKIB/'><img className="mt-30max-w-60" src="./public/assets/logo/int_bee_logo.png"></img></Link></span>
            </div>
            <div className="text-xl font-bold max-w-60 text-center"> MWIT-KVIS Integration Bee Archive </div>
            <button className="btn-primary  max-w-60  hover:font-semibold"><Link to='/MKIB/hall-of-Fame'>Hall of Fame</Link></button>
            <button className="btn-primary  max-w-60  hover:font-semibold"><Link to='/MKIB/archive'>Test Archive</Link></button>
            <div className="flex flex-row gap-3 text-primarySubTitle items-center justify-center">
                <Link to='/MKIB/about'><button >About</button></Link>
                <a href="mailto: thitiwatipst@gmail.com"><button>Contact</button></a>
            </div>
        </div>
    )
}
export default NavBar;