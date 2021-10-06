import React from 'react'
import logo from '../public/logo.png';
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="footer py-10  mt-10">
            <div className="footer-wrap container mx-auto px-8">
                <div className="flex flex-row items-center">
                    <div className="logo-footer mr-2">
                    <Image src="/logo.png" alt="logo_jf_vandermousen" width="59" height="80"/>
                    </div>
                    <div className="social-medias">
                        <ul>
                            <li><b><a href="https://www.linkedin.com/in/jean-francois-vandermousen/" target="_blank" rel="noreferrer">LinkedIn</a></b></li>
                            <li><b><a href="https://github.com/jfvandermousen" target="_blank" rel="noreferrer">Github</a></b></li>       
                    </ul>
                    </div>
                    </div>
                    <div><p className="copyright">@2021 Jf Vandermousen</p></div>
            </div>
        </div>
    )
}
export default Footer;
