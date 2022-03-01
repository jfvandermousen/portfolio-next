import React, {  useEffect,} from "react";
import Link from "next/link"
import gsap from "gsap"
import Image from 'next/image'
import Menu from "./Menu";



const Navigation =() => {
        
        useEffect(()=>{
            let y = window.innerWidth;
             //let negY = ( -y  ); // => -100
            gsap.from('.logo', {x:y, duration: 1.2, ease: "sine.out"})
             //console.log(negY)
        },[])

    return (
        <div className="flex flex-row justify-between items-center py-2 mb-8" >
            <div className="logo">
                <Link href="/"><Image src="/logo.png" alt="logo_jf_vandermousen" width="59" height="80" /></Link>
            </div>
            <Menu />

                    <ul className=" main-nav flex flex-row">
                            <Link href="/"><li><b className="text-xl" href="#">Home</b></li></Link> 
                            <Link href="/Projects" ><li><b  className="text-xl" >Projects</b></li></Link> 
                            <Link href="/Contact" ><li><b  className="text-xl">Contact</b></li></Link> 
                    </ul>

        </div>
    )
}

export default Navigation;

