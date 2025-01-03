import React from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
import { experience } from "../constants";

class Experience extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      colorMode: "lerp",
      birdSize: 1.0,
      quantity: 4.0,
      wingSpan: 30.0,
      speedLimit: 3.0,
      seperation: 20.0,
      alignment: 20.0,
      cohesion: 20.0,
      color1: 0xea580c,
      color2: 0xdc2626,
      backgroundColor: 0x1b1212,
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
                Experience
              </span>
            </h1>
            <p className="mt-5 backdrop-blur-md text-white p-4 text-xl lg:text-2xl rounded-xl">
              I am a skilled software developer with two years of freelance experience,
              specializing in diverse domain solutions. With a strong Computer Engineering
              background and proficiency in multiple technologies, I am eager to contribute
              my expertise to an innovative team.
            </p>
            <div className="py-2">
              <div className="mt-10 flex">
                <VerticalTimeline>
                  {experience.map((experience) => (
                    <VerticalTimelineElement
                      iconStyle={{
                        background: experience.iconBg,
                        padding: "5px",
                      }}
                      animateFrame={this.animateFrame}
                      icon={
                        <div className="flex justify-center items-center w-full h-full">
                          <img
                            src={experience.icon}
                            className="w-[60%] h-[60%] object-contain"
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
                        <h1 className="text-white text-xl font-semibold">
                          {experience.title}
                        </h1>
                        <h3 className="text-white text-base font-medium mb-2">
                          {experience.empolyer}
                        </h3>
                        <span className="text-white text-lg font-semibold">
                          {experience.date}
                        </span>
                      </div>
                      <ul className="my-5 list-disc ml-5 space-y-2 text-lg">
                        {experience.points.map((point, index) => (
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

export default Experience;
