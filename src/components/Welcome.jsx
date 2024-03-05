import React from "react";

import WAVES from 'vanta/dist/vanta.waves.min'

class Welcome extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
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
                    <h1 className='text-5xl lg:text-7xl orange-gradient-text font-bold'>
                        Welcome
                    </h1>
                    <h3 className='text-3xl lg:text-5xl mt-5 text-3xl text-white-100'>
                        Setting up...
                    </h3>
                </section>
            </div>
        );
    }
}

export default Welcome;