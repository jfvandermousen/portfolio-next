import React, { useState} from "react";
import Image from 'next/image'
import {useAlert } from 'react-alert'
import Head from 'next/head'
import { init } from 'emailjs-com';
import {send } from 'emailjs-com';



export default function Contact(props) {

  init("user_7C0DFfICeBZunE5mWt757");

  const alert = useAlert();



  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {

    e.preventDefault();

    send(
      'service_7kfojnv',
      'template_svdwo9m',
      toSend,
      'user_7C0DFfICeBZunE5mWt757', 
    )
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert.show(<div style={{ color: '#99c8ff',fontSize:'1.5em'} }>
          Thanks for contacting me! I will be in touch with you shortly.
          </div>);


      })
      .catch((err) => {
        console.log('FAILED...', err);
        useAlert(<div style={{ color: '#99c8ff',fontSize:'12px' }}>Something went wrong!</div>)
      });
      setTimeout(function(){
        window.location.href = "http://localhost:3000/";
     }, 8000);

  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (

    <div>
        <Head>
        <title>Jf Vandermousen - Contact</title>
         </Head>
            <h3 className="mb-6 text-xl">You can reach me by :</h3>
            <div className="two-windows flex flex-row flex-wrap justify-between w-full pr-4">
              
          <div className="window w-full mb-6 lg:w-4/12  lg:mr-12">
          <div className=" flex flex-row flex-wrap items-center mb-4  ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg><p className="text-base font-normal sm:text-lg"><a href="mailto:jfgraphisme@gmail.com" target="_blank" rel="noopener noreferrer">jfgraphisme@gmail.com</a></p>
              </div>
              <div className=" flex flex-row items-center mb-4 flex-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div><p className="text-base font-normal sm:text-lg" >0485/75.12.16</p></div>
              </div>
              <div className="flex flex-row ">
                <div className="git m-2" >
                    <a href="https://github.com/jfvandermousen" target="_blank" rel="noreferrer">
                      <Image  src="/git.png" alt="github" width='75' height='75'/>
                    </a>
              </div>
              <div className="git m-2">
                  <a href="https://www.linkedin.com/in/jean-francois-vandermousen/" target="_blank" rel="noreferrer">
                  <Image   src="/linkdn.png" alt="linkdn" width='75' height='75'/>
                  </a>
              </div>
              </div>

        </div>
        <div className="window w-full mb-4 lg:w-7/12 ">
      <form className="flex flex-col" onSubmit={onSubmit}>
          <div className=" mr-2 flex flex-col">
            <label className="label">
            <span className="uppercase text-sm form-lab font-bold w-full">Full Name*</span>
            </label>
            <input className="md:w-full  bg-gray-100 form-input mt-2  p-3 focus:outline-none focus:shadow-outline"
              type="text"
              name='from_name'
              placeholder='Your name'
              value={toSend.from_name}
              required
              max="30"
              onChange={handleChange}/>
            </div>
            

          <div className="mt-8 mr-2 flex flex-col">
          <label className="label"> 
            <span className="uppercase text-sm form-lab font-bold">Email*</span>
            </label>
            <input className=" md:w-full    bg-gray-100 form-input mt-2  p-3 focus:outline-none focus:shadow-outline"
                  type='email'
                  name='reply_to'
                  placeholder='Your email'
                  value={toSend.reply_to}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={handleChange}/>
          </div>
         
          <div className="mt-8 mr-2 flex flex-col">
          <label className="label"> 
            <span className="uppercase text-sm form-lab font-bold">Message*</span>
            </label>
            <textarea className="md:w-full    bg-gray-100 form-input mt-2  p-3  focus:outline-none focus:shadow-outline"
              type='text'
              name='message'
              placeholder='Your message'
              required
              value={toSend.message}
              onChange={handleChange}
              />
          </div>
          <button  className="w-full mt-8 bg-btn  text-white font-bold p-4 "
          type="submit">
  SEND

</button>
    </form>
    </div>
    </div>
    <div className="contact-space"> </div>
    </div>
  )
}

