import { useState } from 'react';
import NavBar from "/src/widgets/navbar.jsx";
import parse from 'html-react-parser';
//list of contents
let contestDescription = 'MWIT-KVIS Integration Bee takes inspiration from the famed MIT Integration Bee. It consists of two\
 rounds: qualifying exam and playoff. All MWIT and KVIS students are eligible to participate in the qualifying exam,\
with top 4 scorers from each school qualifying to the playoff round. The playoff round is conducted in a tournament format,\
whereby the contestants are paired and the loser of each pair is eliminated. The playoff consists of three sub - rounds: \
quarterfinals, semifinals, and final.';
let acknowledgementDescription = 'The logo of the first MWIT-KVIS Integration Bee is designed by <b>Tisorn Na Phattalung</b>.<br>\
The problems in the playoff round are proposed by \
<b>Thitiwat Kosolpattanadurong, Atiratch Laoharenoo, Patthadon Phengpinij,\
    Sirawit Pipittanaban, Wasanont Pongsawat, Chanatip Sujsantinukul,\
        Tanupat Trakulthongchai</b>,  and edited by \
<b>Thitiwat Kosolpattanadurong, Patthadon Phengpinij, and Tanupat Trakulthongchai.</b>\
The playoff is organised by\
<b> Pannathut Chitpakdee, Thitiwat Kosolpattanadurong, Rathanon Makaramanee,\
    Tisorn Na Phattalung, Patthadon Phengpinij, Thawin Serivivatanavongse,\
        Tanupat Trakulthongchai </b>,\
            and refereed by\
<b> Atiratch Laoharenoo and Wasanont Pongsawat. </b>';

function About() {
    const [count, setCount] = useState(0)
    //main page
    return (

        <div className="sm:px-12 md:px-16 lg:px-24 xl:px-36 pt-20">
            <div className='mt-14 mx-10 grid lg:grid-cols-[2fr_8fr] text-primaryBase gap-10'>
                <div className="sticky top-0">
                    <NavBar />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='h-fit'>
                        <div className="text-2xl font-bold">About us</div>
                        <div className="text-base pt-1 mr-10">{contestDescription}</div>
                    </div>
                    <div className='h-fit'>
                        <div className="text-2xl font-bold">Acknowledgements</div>
                        <div className="text-base pt-1 mr-10">{parse(acknowledgementDescription)}</div>
                    </div>
                    
                </div>
            </div>
        </div>

        
    )
}

export default About
