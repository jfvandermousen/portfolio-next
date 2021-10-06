  import 'tailwindcss/tailwind.css';
  import './styles.css';
  import Navigation from "../components/Navigation";
  import Background from '../components/Background';
  import Footer from '../components/Footer';
  import Fade from 'react-reveal/Fade';




  function MyApp({ Component, pageProps }) {
    return (
      <>
      <Background className="bg"/>
      <div className="container mx-auto px-8 pt-8">
            
              <Navigation/>
              <Component {...pageProps} />
            </div>
            <Fade bottom delay={11500}>
            <Footer/>
            </Fade>
            </>
          )
  }

  export default MyApp
