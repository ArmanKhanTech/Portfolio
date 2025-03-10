import React from "react";
import NET from "vanta/dist/vanta.net.min";
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
    const isMobile = window.innerWidth < 1024;

    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      scale: 1.0,
      mobileScale: 1.0,
      points: 15,
      maxDistance: 20,
      showDots: false,
      spacing: isMobile ? 36 : 20,
      backgroundColor: 0x1b1212,
      color: 0xea580c,
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
            <p className="mt-5 text-white p-4 text-xl lg:text-2xl rounded-xl backdrop-blur-md">
              Fascinated by technology's endless possibilities, my academic
              journey has built a strong foundation in computer science and
              problem-solving. Beyond the classroom, I'm an avid learner,
              dedicated to continuous growth in coding, designing, and exploring
              cutting-edge technologies.
            </p>
            <div className="py-10 flex flex-col">
              <h1 className="text-4xl orange-gradient-text font-semibold">
                Skills
              </h1>
              <div className="mt-10 grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <div
                    className="h-24 w-24 p-2 backdrop-blur-md rounded-xl flex justify-center items-center"
                    key={skill.name}
                  >
                    <div className="btn-front rounded-xl flex flex-col gap-2 justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-12 h-12 object-contain lg:lg:hover:scale-110 transition-transform"
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
              <h1 className="text-4xl orange-gradient-text font-semibold">
                Education
              </h1>
              <div className="mt-10 flex">
                <VerticalTimeline>
                  {education.map((education) => (
                    <VerticalTimelineElement
                      key={education.title}
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
                            className="w-[60%] h-[60%]"
                          />
                        </div>
                      }
                      contentStyle={{
                        borderBottom: "8px",
                        borderStyle: "solid",
                        borderBottomColor: "#ea580c",
                        borderRadius: "10px",
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                        backgroundColor: "rgba(0, 0, 0, 0.10)",
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
                          <li className="text-white pl-1" key={index}>
                            {point}
                          </li>
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
