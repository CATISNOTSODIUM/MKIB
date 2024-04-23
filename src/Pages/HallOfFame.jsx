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
            <div className="grid-cols gap-3">
                <div className="text-3xl text-center font-bold">Hall of frame</div>
                <div className="text-2xl font-bold">2023 Results</div>

                The first MWIT-KVIS Integration Bee took place on Sunday, November 12 from 8:40 to 10:30 in Rooms 222 and 224 at KVIS. 
                    
                    <div><span className="font-bold">Winner:</span> Puttisan Korsettarat, KVIS</div>
                    <div><span className="font-bold">Runner-up:</span> Werawis Asawapiromz, KVIS</div>
                    <div><span className="font-bold">Semifinalists:</span> Dechatorn Pattasopon, MWIT; Nopparuj Sodsri, KVIS</div>
                    <div><span className="font-bold">Quarterfinalists: </span> Kasidet Joohong, Nattapat Kingkan, Preechakorn Yasamorn, MWIT;
                        Thanwa Ruchakhom, KVIS
                    </div>
                    
                    <div className="w-full flex  items-center justify-center py-2"><img src="./assets/images/2023_group_photo.jpg" className="object-cover w-4/6"></img></div>
            </div>
        </div>
        </div>
    )
}

export default HallOfFame
