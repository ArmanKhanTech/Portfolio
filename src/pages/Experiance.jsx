import React from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
import { experiance } from "../constants";

class Experiance extends React.Component {
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
      quantity: 5.0,
      wingSpan: 30.0,
      speedLimit: 5.0,
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
                Experiance
              </span>
            </h1>
            <p className="mt-5 bg-black bg-opacity-25 text-white p-4 text-xl lg:text-2xl rounded-xl backdrop-blur-xl">
              I possess expertise as a proficient software developer,
              specializing in diverse domain solutions and boasting two years of
              freelance experience. Backed by a robust Computer Engineering
              background and proficiency in multiple technologies, I am
              enthusiastic about leveraging my skills and analytical
              capabilities within an innovative team. My dedication to
              technology and hands-on experience position me as a valuable
              resource for companies.
            </p>
            <div className="py-2">
              <div className="mt-10 flex">
                <VerticalTimeline>
                  {experiance.map((experiance) => (
                    <VerticalTimelineElement
                      iconStyle={{
                        background: experiance.iconBg,
                        padding: "5px",
                      }}
                      animateFrame={this.animateFrame}
                      icon={
                        <div className="flex justify-center items-center w-full h-full">
                          <img
                            src={experiance.icon}
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
                        <h1 className="text-white text-xl font-semibold">
                          {experiance.title}
                        </h1>
                        <h3 className="text-white text-base font-medium mb-2">
                          {experiance.empolyer}
                        </h3>
                        <span className="text-white text-lg font-semibold">
                          {experiance.date}
                        </span>
                      </div>
                      <ul className="my-5 list-disc ml-5 space-y-2 text-lg">
                        {experiance.points.map((point, index) => (
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

export default Experiance;
