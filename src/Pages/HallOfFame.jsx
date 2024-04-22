import { useState } from 'react';
import NavBar from "/src/widgets/navbar.jsx";
function HallOfFame() {
    const [count, setCount] = useState(0)
    //main page
    return (
        <div className="sm:px-12 md:px-16 lg:px-24 xl:px-36 pt-20 pb-30">
        <div className='mt-14 mx-10 grid lg:grid-cols-[2fr_8fr] text-primaryBase gap-10'>
            <div className="sticky top-0">
                <NavBar />
            </div>
            <div>Under construction</div>
        </div>
        </div>
    )
}

export default HallOfFame
