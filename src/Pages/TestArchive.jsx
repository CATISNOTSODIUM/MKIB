import { useState } from 'react'
import { Link } from "react-router-dom";
import NavBar from "/src/widgets/navbar.jsx";
import {displayList} from "/src/contents/FileLabel.jsx";
function TestArchive() {
    const [count, setCount] = useState(0)
    //main page
    return (

        <div className=" sm:px-12 md:px-16 lg:px-24 xl:px-36 pt-20 ">
            <div className="mt-14 mx-10 grid lg:grid-cols-[2fr_8fr] text-primaryBase gap-10">
                <div className="top-0">
                    <NavBar />
                </div>
                <div className='flex flex-col gap-4 max-h-screen '>
                    <div >
                        <div className="text-2xl font-bold">Test Archive</div>
                        <div>Special thanks to <b>Tanupat Trakulthongchai</b>, and our advisors Atiratch Laoharenoo and Wasanont Pongsawat for finalizing the problems and solutions.
                        </div>
                        <div className="mt-2">If you want to contribute to our archive, the preferred way to do this is via our <a href="https://github.com/CATISNOTSODIUM/MKIB" className='text-decoration-line: underline'>GitHub respository</a>. However, <a href="mailto: thitiwatipst@gmail.com" className='text-decoration-line: underline'>emailing</a> directly to us is welcomed.</div>
                        </div>
                    <div>
                    <hr/>
                    <div className="text-sm mr-10">
                    {displayList.map(function (information) {
                    return (
                    <div className='py-5'>
                    <div className='grid grid-cols gap-2'>
                        <div className="text-xl font-bold">{information.title}</div>
                        <div className="text-base w-6/10">{information.description}</div>
                            <div className="text-sm"> <span className="font-semibold">KVIS Qualifying Round: </span> {information.qualifyingExam.map(
                            function (files) {
                                return (
                                    <a href={files[0]} className="text-primaryTitle text-decoration-line:underline hover:font-bold mr-2">{files[1]}</a>
                                )
                            }
                        )}
                        </div>
                            <div className="text-sm"><span className="font-semibold">Playoff Round: </span>{information.playOffExam.map(
                            function (files) {
                                return (
                                    <a href={files[0]} key={files[1]} className="text-primaryTitle text-decoration-line:underline mr-2 hover:font-bold">{files[1]}</a>
                                )
                            }
                        )}
                        </div>
                                <div className="text-sm"><span className="font-semibold">Other files: </span>{information.otherFiles.map(
                            function (files) {
                                return (
                                    <a href={files[0]} key={files[1]} className="text-primaryTitle text-decoration-line:underline mr-2 hover:font-bold">{files[1]}</a>
                                )
                            }
                        )}
                        </div>
                        
                    </div>
                    </div>
                    )
                    }
                    )}
                    </div>
                    </div>
                    <hr/>
                    <div>
                        <div className="text-base font-bold">Call for Problems (Beta)</div>
                        <div className="text-sm">We are particularly interested in problems whose the solutions are accessible to high school students. The rules
                            and the scopes of this competition can be found <a className='text-decoration-line: underline'>here</a>. Feel free to submit via <a href="mailto: thitiwatipst@gmail.com" className='text-decoration-line: underline'>this email</a>.
                        </div>
                        <div className="text-sm mt-2">To ensure a fair competition, please submit problems that have not been publicized elsewhere.</div>
                    </div>
                    <hr />

                </div>
            </div>
        </div>
    )
}

export default TestArchive
