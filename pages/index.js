import Head from 'next/head'
import About from '../components/About'
import Fade from 'react-reveal/Fade';
import Works from '../components/Works';




export default function Home() {
  return (
    <>
      <Head>
        <title>Jf Vandermousen - Portfolio</title>
      </Head>
      <div>

        <About/>
        <Fade bottom delay={11000}>
        <Works />
        </Fade>

      </div>        

    </>
  )
}
