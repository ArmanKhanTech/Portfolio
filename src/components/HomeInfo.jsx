import React from 'react';

import { NavLink, Link } from "react-router-dom";
import TextTransition, { presets } from 'react-text-transition';

import HireButton from './HireButton';
import { socialLinks } from "../constants";

const TEXTS = [
  'Web Development', 
  'App Development', 
  'UI/UX Design', 
  'Machine Learning',
  'Cloud Computing',
  '& much more...'
];

const HomeInfo = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className='max-container'>
      <div>
        <div className='text-4xl lg:text-6xl font-bold orange-gradient-text text-stroke-red-lg'>
          <h1>Hi! there,</h1>
          <h1>I am Arman Khan and I do</h1>
        </div>
        <TextTransition 
          springConfig={presets.gentle} 
          direction="down" 
          style={{
            marginTop: '1rem',
            fontSize: window.innerWidth <= 768 ? '2.25rem' : '3.75rem',
            lineHeight: '1',
            fontWeight: '700',
            WebkitTextStroke: '1px #ea580c',
            color: '#ec144a'}}>
          {
            <span>
              {TEXTS[index % TEXTS.length]}
            </span>
          }
        </TextTransition>
      </div>
      <NavLink to='/services'>
        <HireButton />
      </NavLink>
      <div className='mt-5 font-bold text-2xl lg:text-4xl text-red-600 text-stroke-orange-md'>
        <span>
          Currently a third year Computer Engineering student from India.
        </span>
      </div>
      <div className='mt-5'>
        <a href='https://ak2341776.hackerresume.io/f4f17b26-462c-4ae4-94a7-1e900998a02f' target='_blank' rel='noreferrer'>
          <button className='px-3 py-1.5 font-bold text-2xl lg:text-3xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
            Resume
          </button>
        </a>
      </div>
      <div className='fixed bottom-0 inline flex gap-2 mb-5'>
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target='_blank'>
            <img
              src={link.iconUrl}
              alt={link.name}
              className={`${link.name === 'LinkedIn' ? 'linkedin-icon' : 'h-11 w-11'} object-cover`} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeInfo;
