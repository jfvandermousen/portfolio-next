
import React, {useEffect } from "react"
import { init } from "ityped";

const About = () => {


    useEffect(()=>{
            const myElement = document.querySelector("#about");
            init(myElement, {
                    showCursor: false,
                    typeSpeed:  60,
                    startDelay: 1500,
                    loop:  false,
                    disableBackTyping: true,
                    strings: ["I am currently looking for a Junior Web Developer position in a creative company to develop and improve my skills."]
                });
            },[]);


    return (
        <div className="about-block mb-12">
        <section className="mb-8"> 
            <div className="mb-2"><h3 className="text-2xl mb-4 lg:text-3xl">$whoami</h3></div>
            <div className="intro" > 
                <h1 className="text-2xl">Jf Vandermousen</h1>
                <h2>Creative Frontend Developer</h2>
            </div>
        </section>
        <section className="about mb-4">
        <div className="mb-2"><h3 className="text-2xl mb-4 lg:text-3xl">about</h3></div>
        <p id="about" className="md:w-1/2 text-xl lg:text-2xl"></p>
    </section>

    </div>
    )

};
export default About;