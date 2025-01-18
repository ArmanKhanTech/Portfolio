import React from "react";
import PropTypes from 'prop-types';

import WAVES from "vanta/dist/vanta.waves.min";
import "react-vertical-timeline-component/style.min.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
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
    const { loadingProgress } = this.props;
    if (loadingProgress >= 100) {
      return null;
    }

    return (
      <section ref={this.vantaRef} className="fixed inset-0 z-50 p-5">
        <div className="h-screen w-screen flex flex-col gap-5 items-start md:items-center justify-center">
          <h1 className="text-5xl lg:text-7xl orange-gradient-text font-semibold">
            Welcome to my Portfolio
          </h1>
          <h3 className="text-3xl lg:text-5xl text-3xl text-white-100">
            Setting up...
          </h3>
        </div>
      </section>
    );
  }
}

Welcome.propTypes = {
  loadingProgress: PropTypes.number.isRequired
};

export default Welcome;
