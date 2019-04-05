import React from 'react';
import Particles from 'react-particles-js';
import './style.css';

const Home = () => {
    return (
        <div className="jumbotron ">
            <div className="overlay"></div>
            <div className="caption">
                <h1 className="font-weight-bold">Outdoor Gear Bank</h1>
            </div>
            <Particles
                height="500px"
                params={{
                    "particles": {
                        "number": {
                            "value": 200,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 5
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
        </div>
    )
}

export default Home