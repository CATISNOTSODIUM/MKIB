import { useState } from 'react'
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)
  //main page
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center text-primaryBase">
      <div className="text-4xl"> <img className="h-32" src="/assets/logo/int_bee_logo.png"></img> </div>
      <div className="text-xl font-bold"> MWIT-KVIS Integration Bee Archive </div>
      <button className="btn-primary  hover:font-semibold"><Link to='hall-of-Fame'>Hall of Fame</Link></button>
      <div className="text-sm">Check out our Integration-Bee hall of Fame.</div>
      <button className="btn-primary  hover:font-semibold"><Link to='archive'>Test Archive</Link></button>
      <div className="text-sm max-w-80 text-center"> Our collection of integration problems from MWIT-KVIS Integration Bee. </div>
      <div className="flex flex-row gap-3 text-primarySubTitle">
        <Link to='/about'><button>About</button></Link>
        <a href="mailto: thitiwatipst@gmail.com"><button>Contact</button></a>
      </div>
    </div>
  )
}

export default App
