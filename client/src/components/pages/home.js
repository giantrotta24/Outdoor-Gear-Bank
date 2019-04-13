import React from 'react';
import Particles from 'react-particles-js';
import './style.css';

const Home = () => {
    return (
        <div className='jumbotron '>
            <Particles
                height='600px'
                params={{
                    'particles': {
                        'number': {
                            'value': 200,
                            'density': {
                                'enable': false
                            }
                        },
                        'size': {
                            'value': 4,
                            'random': true,
                            'anim': {
                                'speed': 4,
                                'size_min': 0.3
                            }
                        },
                        'line_linked': {
                            'enable': false
                        },
                        'move': {
                            'random': true,
                            'speed': 1,
                            'direction': 'top',
                            'out_mode': 'out'
                        }
                    },
                    'interactivity': {
                        'events': {
                            'onhover': {
                                'enable': true,
                                'mode': 'bubble'
                            },
                            'onclick': {
                                'enable': true,
                                'mode': 'repulse'
                            }
                        },
                        'modes': {
                            'bubble': {
                                'distance': 250,
                                'duration': 2,
                                'size': 0,
                                'opacity': 5
                            },
                            'repulse': {
                                'distance': 400,
                                'duration': 4
                            }
                        }
                    }
                }} />
            <div className='caption'>

                <h1 className='page-title' id='caption'><i id='header-mount' className='fas fa-mountain'></i>Outdoor Gear Bank</h1>

                <h5 className='sub-header' id='caption'>A simple way to manage your rental gear.</h5>

            </div>
            <div className='overlay'></div>
        </div>
    );
}

export default Home