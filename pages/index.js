import Head from 'next/head'
import About from '../components/About'
import Fade from 'react-reveal/Fade';
import Works from '../components/Works';
// import Works from '../components/Works';
// import gsap from "gsap";
import AnimWorks from '../components/AnimWorks';




export default function Home() {
  return (
    <>
      <Head>
        <title>Jf Vandermousen - Portfolio</title>
      </Head>
      <About/>
      <AnimWorks/>
      {/*<div>
       *<Fade bottom delay={11000}>
        <Works />
        </Fade>
      </div>   */}      

    </>
  )
}
