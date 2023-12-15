import React from "react";

import { CTA, Navbar } from "../components";
import { services } from "../constants";

const Services = () => {
    
    return (
        <section className='max-container absolute ml-0 inset-0 overflow-y-auto bg-black'>
            <Navbar {
              ...{
                textColor: "text-white-100",
                }
            } />
            <h1 className='text-5xl'>
                <span className='font-bold orange-gradient-text font-semibold'>
                    Services
                </span>
            </h1>
            <p className='mt-5 text-white p-4 text-xl rounded-xl bg-blur'>
                I am a versatile freelancer specializing in app and web development, 
                as well as machine learning. With a passion for transforming ideas into 
                innovative digital solutions, I bring expertise in creating dynamic and 
                user-friendly applications, whether native or cross-platform, and designing 
                responsive websites using the latest technologies. In the realm of machine 
                learning, I leverage data-driven approaches to develop intelligent algorithms, 
                enhancing the capabilities of applications. Committed to staying abreast of 
                industry trends, I ensure my work at the intersection of creativity and 
                technology is at the forefront of advancements. If you're looking for a 
                freelancer with a proven track record in delivering high-quality solutions, 
                explore my portfolio to witness the seamless blend of app development, 
                web development, and machine learning expertise.
            </p>
            <div>
                {services.map((service, index) => {
                    const { title, description, icon } = service;
                    return (
                        <div key={index} className='flex flex-col items-center justify-center text-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={icon} alt={title} className='w-24 h-24' />
                                <h2 className='text-2xl font-bold mt-5 mb-2'>{title}</h2>
                                <p className='text-white-100 text-xl'>{description}</p>
                            </div>
                        </div>
                    )}
                )}
            </div>
            <CTA />
        </section>
    )
};

export default Services;