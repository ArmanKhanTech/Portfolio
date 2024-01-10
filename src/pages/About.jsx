import React from 'react'

import HALO from 'vanta/dist/vanta.halo.min'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA, Navbar } from "../components";
import { education, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

class About extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
    this.isMobile = window.innerWidth < 640;
  }

  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      backgroundColor: 0x131a43,
      amplitudeFactor: 0.25,
      size: 1,
      scale: 1.00,
      mobileScale: 1.00,
    })
    this.frameId = requestAnimationFrame(this.animateFrame);
  }
  
  animateFrame = () => {
    this.frameId = requestAnimationFrame(this.animateFrame);
  }
  
  componentWillUnmount() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    return (
    <div 
        ref={this.vantaRef} 
        className="fixed inset-0 z-0">
        <section className="max-container absolute inset-0 overflow-y-auto">
            <Navbar />
            <h1 className={`${this.isMobile ? 'text-headingMobile' : 'text-5xl'}`}>
                <span className='font-bold orange-gradient-text font-semibold'>
                    About Me
                </span>
            </h1>
            <p className='mt-5 text-white p-4 text-xl rounded-xl bg-blur'> 
                Fascinated by technology's endless possibilities, my academic journey has built a 
                strong foundation in computer science and problem-solving. Beyond the classroom, 
                I'm an avid learner, dedicated to continuous growth in coding, designing, and 
                exploring cutting-edge technologies.
            </p>
            <div className='py-10 flex flex-col'>
                <h1 className='text-4xl blue-gradient_text font-semibold'>My Skills</h1>
                <div className='mt-10 flex flex-wrap gap-12'>
                {skills.map((skill) => (
                    <div 
                        className={`${this.isMobile ? 'w-16 h-16' : 'w-20 h-20'} block-container`} 
                        key={skill.name}>
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='py-2'>
                <h1 className='text-4xl blue-gradient_text font-semibold'>My Education</h1>
                <div className='mt-10 flex'>
                <VerticalTimeline>
                    {education.map((education) => (
                        <VerticalTimelineElement
                            iconStyle={{ 
                                background: education.iconBg,
                                innerWidth: '100%',
                                innerHeight: '100%',
                             }}
                            animateFrame={this.animateFrame}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img
                                        src={education.icon}
                                        className='w-[60%] h-[60%] object-contain'/>
                                </div>
                            }
                            contentStyle={{
                                borderBottom: "8px",
                                borderStyle: "solid",
                                borderBottomColor: '#00c6ff',
                                borderRadius: '10px',
                                backdropFilter: "blur(50px)",
                                WebkitBackdropFilter: 'blur(50px)',
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                boxShadow: "none",
                            }}>
                            <div>
                                <h1 className='text-white text-xl font-bold mb-2'>
                                    {education.title}
                                </h1>
                                <span className='text-white text-lg font-semibold'>
                                    {education.date}
                                </span>
                            </div>
                            <ul className='my-5 list-disc ml-5 space-y-2 text-lg'>
                                {education.points.map((point, index) => (
                                    <li className='text-white pl-1'>
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
    )
  }
}

export default About;
