import React from "react";

import WAVES from "vanta/dist/vanta.waves.min";
import "react-vertical-timeline-component/style.min.css";

class Welcome extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      color: 0x000000,
      waveHeight: 20,
      shininess: 100,
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
      <section ref={this.vantaRef} className="fixed inset-0 z-50">
        <div className="h-screen w-screen flex flex-col items-start md:items-center justify-center p-5">
          <h1 className="text-5xl lg:text-7xl orange-gradient-text font-semibold">
            Welcome to my Portfolio
          </h1>
          <h3 className="text-3xl lg:text-5xl mt-5 text-3xl text-white-100">
            Setting up...
          </h3>
        </div>
      </section>
    );
  }
}

export default Welcome;