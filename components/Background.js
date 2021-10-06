import React from 'react'
import Particles from 'react-particles-js';

const Background = () => {
    return (
        <div>
            <Particles className="particles"
            params={{
              
                particles: {
                    color: {
                        "value": "#ffffff"
                      },
                      opacity: {
                        "value": 1,
                        "random": false
                      },
                        "anim": {
                          "enable": false,
                          "speed": 2,
                          "opacity_min": 0.5,
                          "sync": false           
                },
                move: {
                  speed: 1
              },
                line_linked: {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.8,
                    "width": 1.5
                  },
                  
            }
            }}/>
            
        </div>
    )
}
export default Background;