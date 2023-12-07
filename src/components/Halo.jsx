import React from 'react'
import HALO from 'vanta/dist/vanta.halo.min'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
import { CTA, Navbar } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

class Halo extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = HALO({
        el: this.vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        baseColor: 0x0,
        backgroundColor: 0x0,
        amplitudeFactor: 2.00,
        size: 1.5
    })
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return <div 
    ref={this.vantaRef} 
    className="fixed inset-0 z-0">
        <section className="max-container absolute inset-0 overflow-y-auto">
            
            <Navbar {
                ...{
                textColor: "text-white-100",
                }
            } />

            <h1 className='head-text text-white'>
                About Me
            </h1>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text text-white'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12'>
                {skills.map((skill) => (
                    <div className='block-container w-20 h-20' key={skill.name}>
                        <div className='btn-front rounded-xl flex justify-center items-center'>

                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-1/2 h-1/2 object-contain'/>

                        </div>
                    </div>
                ))}
                </div>
            </div>

            <div className='py-16'>

                <h3 className='subhead-text text-white'>Education</h3>

                <div className='mt-12 flex'>

                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <VerticalTimelineElement
                            iconStyle={{ 
                                background: experience.iconBg,
                                innerWidth: '100%',
                                innerHeight: '100%',
                             }}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>

                                    <img
                                        src={experience.icon}
                                        alt={experience.company_name}
                                        className='w-[60%] h-[60%] object-contain'/>

                                </div>
                            }
                            contentStyle={{
                                borderBottom: "8px",
                                borderStyle: "solid",
                                borderBottomColor: '#00c6ff',
                                borderRadius: '10px',
                                backdropFilter: "blur(10px)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                boxShadow: "none",
                            }}>

                            <div>
                                <h3 className='text-white text-xl font-poppins font-semibold'>
                                    {experience.title}
                                </h3>

                                <p
                                    className='text-white font-medium text-base'
                                    style={{ margin: 0 }}>
                                    {experience.date}
                                </p>
                            </div>

                            <ul className='my-5 list-disc ml-5 space-y-2'>
                                {experience.points.map((point, index) => (

                                    <li
                                        key={`experience-point-${index}`}
                                        className='text-white font-normal pl-1 text-sm'>
                                        {point}
                                    </li>

                                ))}
                            </ul>

                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    </div>
  }
}

export default Halo;