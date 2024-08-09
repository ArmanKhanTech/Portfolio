import React from "react";
import HALO from "vanta/dist/vanta.halo.min";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA, Navbar } from "../components";
import { education, skills } from "../constants";


class About extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      backgroundColor: 0x000000,
      amplitudeFactor: 0.25,
      size: 1,
      scale: 1.0,
      mobileScale: 1.0,
    });
    this.frameId = requestAnimationFrame(this.animateFrame);
  }

  animateFrame = () => {
    this.frameId = requestAnimationFrame(this.animateFrame);
  };

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
      <section ref={this.vantaRef} className="fixed inset-0 z-0">
          <div className="max-container absolute ml-0 inset-0 overflow-y-auto">
          <h1 className="text-headingMobile lg:text-5xl">
            <span className="font-bold orange-gradient-text font-bold">
              About
            </span>
          </h1>
          <p className="mt-5 text-white p-4 text-xl lg:text-2xl rounded-xl bg-blur">
            Fascinated by technology's endless possibilities, my academic
            journey has built a strong foundation in computer science and
            problem-solving. Beyond the classroom, I'm an avid learner,
            dedicated to continuous growth in coding, designing, and exploring
            cutting-edge technologies.
          </p>
          <div className="py-10 flex flex-col">
            <h1 className="text-4xl blue-gradient-text font-bold">My Skills</h1>
            <div className="mt-10 flex flex-wrap gap-12">
              {skills.map((skill) => (
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 block-container"
                  key={skill.name}
                >
                  <div className="btn-front-1 rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-4xl blue-gradient-text font-bold">
              My Education
            </h1>
            <div className="mt-10 flex">
              <VerticalTimeline>
                {education.map((education) => (
                  <VerticalTimelineElement
                    iconStyle={{
                      background: education.iconBg,
                      innerWidth: "100%",
                      innerHeight: "100%",
                    }}
                    animateFrame={this.animateFrame}
                    icon={
                      <div className="flex justify-center items-center w-full h-full">
                        <img
                          src={education.icon}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: "#00c6ff",
                      borderRadius: "10px",
                      backdropFilter: "blur(50px)",
                      WebkitBackdropFilter: "blur(50px)",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "none",
                    }}
                  >
                    <div>
                      <h1 className="text-white text-xl font-bold mb-2">
                        {education.title}
                      </h1>
                      <span className="text-white text-lg font-bold">
                        {education.date}
                      </span>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2 text-lg">
                      {education.points.map((point, index) => (
                        <li className="text-white pl-1">{point}</li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
          <hr className="border-slate-200" />
          <CTA />
        </div>
        </section>
    );
  }
}

export default About;
