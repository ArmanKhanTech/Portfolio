import React from "react";

import WAVES from 'vanta/dist/vanta.waves.min'

class Welcome extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
        this.isMobile = window.innerWidth < 640;
    }

    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color: 0x000000,
            shininess: 150.00,
            waveHeight: 10.00,
            waveSpeed: 0.50,
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
                className="fixed inset-0 z-50 w-screen h-screen bg-black">
                <section className="max-container">
                    <h1 className={`${this.isMobile ? 'text-5xl' : 'text-6xl'} orange-gradient-text font-semibold`}>
                        Welcome
                    </h1>
                    <h3 className="mt-5 text-3xl text-white-100 font-semibold">
                        Setting up...
                    </h3>
                </section>
            </div>
        );
    }
}

export default Welcome;