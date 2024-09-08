import React from "react";
import HALO from "vanta/dist/vanta.halo.min";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
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
      backgroundColor: 0x1b1212,
      amplitudeFactor: 3.0,
      size: 2.5,
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
        <div className="relative w-full h-full overflow-y-auto">
          <div className="max-container absolute inset-0">
            <h1 className="text-headingMobile lg:text-5xl">
              <span className="font-semibold orange-gradient-text">
                About Me
              </span>
            </h1>
            <p className="mt-5 bg-black bg-opacity-25 text-white p-4 text-xl lg:text-2xl rounded-xl backdrop-blur-xl">
              Fascinated by technology's endless possibilities, my academic
              journey has built a strong foundation in computer science and
              problem-solving. Beyond the classroom, I'm an avid learner,
              dedicated to continuous growth in coding, designing, and exploring
              cutting-edge technologies.
            </p>
            <div className="py-10 flex flex-col">
              <h1 className="text-4xl blue-gradient-text font-semibold backdrop-blur-[2px]">
                My Skills
              </h1>
              <div className="mt-10 grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <div
                    className="h-24 w-24 backdrop-blur-xl p-2 bg-black bg-opacity-25 rounded-xl flex justify-center items-center"
                    key={skill.name}
                  >
                    <div className="btn-front rounded-xl flex flex-col gap-2 justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-12 h-12 object-contain"
                      />
                      <p className="text-white text-xs lg:text-sm font-semibold text-center">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2">
              <h1 className="text-4xl blue-gradient-text font-semibold backdrop-blur-[2px]">
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
                        backdropFilter: "blur(60px)",
                        WebkitBackdropFilter: "blur(60px)",
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        boxShadow: "none",
                      }}
                    >
                      <div>
                        <h1 className="text-white text-xl font-semibold mb-2">
                          {education.title}
                        </h1>
                        <span className="text-white text-lg font-semibold">
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
            <hr className="border-slate-200 mt-10" />
            <CTA color={"bg-orange-600"} />
            <hr className="h-2 border-transparent" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
