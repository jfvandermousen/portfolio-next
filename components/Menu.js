import React, {useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';
import Link from "next/link"


const Menu = () => {
    const [showMenu,setShowMenu] = useState(false);
    
    let menu
    

    if(showMenu){
        menu =  
        <Fade delay={1000} >
        <div className="fixed bg-black h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center" >
         <Link href="/"><div className="p-4" onClick={()=>setShowMenu(!showMenu)}> <p className="nav-overlay text-4xl">Home</p></div></Link>
            <Link href="/Projects" ><div className="p-4" onClick={()=>setShowMenu(!showMenu)}><p className="nav-overlay text-4xl ">Projects</p></div></Link>
            <Link href="/Contact" ><div className="p-4" onClick={()=>setShowMenu(!showMenu)}><p className=" nav-overlay text-4xl ">Contact</p></div></Link>
        </div>
        </Fade>

    }

    return (
        <div className="above">
        <div className=" navBar flex flex-row justify-end" >
            <Hamburger  duration={1}  toggled={showMenu} toggle={setShowMenu} />
        </div>
        {menu }
        </div>

    )
}
export default Menu;
