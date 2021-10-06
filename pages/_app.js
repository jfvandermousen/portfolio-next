  import 'tailwindcss/tailwind.css';
  import './styles.css';
  import Navigation from "../components/Navigation";
  import Background from '../components/Background';
  import Footer from '../components/Footer';
  import Fade from 'react-reveal/Fade';
  import { transitions, positions, Provider as AlertProvider } from 'react-alert'
  import AlertTemplate from 'react-alert-template-basic'

  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.FADE
  }


  function MyApp({ Component, pageProps }) {
    return (
      <>
      <AlertProvider template={AlertTemplate} {...options}>
      <Background className="bg"/>
      <div className="container mx-auto px-8 pt-8">
            
              <Navigation/>
              <Component {...pageProps} />
            </div>
            <Fade bottom delay={11500}>
            <Footer/>
            </Fade>
            </AlertProvider>
            </>
          )
  }

  export default MyApp
