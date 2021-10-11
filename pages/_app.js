  import 'tailwindcss/tailwind.css';
  import './styles.css';
  import Navigation from "../components/Navigation";
  import Background from '../components/Background';
  import Footer from '../components/Footer';
  import Fade from 'react-reveal/Fade';
  import { transitions, positions, Provider as AlertProvider } from 'react-alert'
  import AlertTemplate from 'react-alert-template-basic'

  // Form alert options

  
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
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
