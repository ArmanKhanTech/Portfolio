import React from "react";

import { Link } from "react-router-dom";

import { CTA, Navbar } from "../components";
import { services } from "../constants";
import { arrow } from "../assets/icons";

import DOTS from 'vanta/dist/vanta.dots.min'

class Services extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
  
    componentDidMount() {
        this.vantaEffect = DOTS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            size: 5.00,
            spacing: 40.00,
            backgroundColor: 0x131a43,
            showLines: false,
        })
    }
  
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }
    
    render() {
        return (
            <div 
                ref={this.vantaRef} 
                className="fixed inset-0 z-50 w-screen h-screen bg-[#131a43]">
                <section className='max-container absolute ml-0 inset-0 overflow-y-auto'>
                    <Navbar />
                    <h1 className='text-headingMobile lg:text-5xl'>
                        <span className='font-bold orange-gradient-text font-bold'>
                            Services
                        </span>
                    </h1>
                    <p className='mt-5 text-white p-4 text-xl lg:text-2xl rounded-xl bg-blur'>
                        Passionate about transforming ideas into innovative digital solutions, 
                        I specialize in creating dynamic applications and responsive websites 
                        with the latest technologies. In machine learning, I employ data-driven 
                        approaches to develop intelligent algorithms, enhancing application 
                        capabilities. 
                    </p>
                    <div className='flex flex-wrap my-20 gap-16'>
                        {services.map((service) => (
                        <div className='lg:w-[400px] w-full' key={service.name}>
                            <div className='block-container w-12 h-12'>
                                <div className={`btn-back rounded-xl ${service.theme}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={service.iconUrl}
                                        alt='threads'
                                        className='p-2 object-contain'/>
                                </div>
                            </div>
                            <div className='mt-5 flex flex-col bg-blur p-3 rounded-xl'>
                                <h4 className='text-2xl font-poppins text-white font-semibold'>
                                    {service.name}
                                </h4>
                                <p className='mt-2 text-white text-lg lg:text-xl'>{service.description}</p>
                                <div className='mt-5 flex items-center gap-2 font-poppins'>
                                    <Link
                                        to={service.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-bold text-blue-600' >
                                        Know More
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt='arrow'
                                        className='w-4 h-4 object-contain' />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <hr className='border-slate-200' />
                    <CTA />
                </section>
            </div>
        )
    }
};

export default Services;