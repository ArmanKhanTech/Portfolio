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

  const isMobile = window.innerWidth <= 640;

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  if(isMobile) {
    return (
      <section className='max-container'>
        <div>
          <div className='text-4xl font-bold orange-gradient-text'>
            <h1>Hello,</h1>
            <h1>I am Arman Khan & I do</h1>
          </div>
          <TextTransition 
            springConfig={presets.gentle} 
            direction="down" 
            style={{
              marginTop: '0.5rem',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: '700',
              display: 'inline',
              color: '#ec144a' }}>
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
        <div className='mt-4 font-black text-2xl orange-gradient-text'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='my-3'>
          <a href='https://ak2341776.hackerresume.io/f4f17b26-462c-4ae4-94a7-1e900998a02f' target='_blank' rel='noreferrer'>
            <button className='px-3 py-1.5 font-semibold text-xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
        <div className='flex gap-2 mt-4'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`${link.name === 'LinkedIn' ? 'linkedin-icon-mobile' : 'h-8 w-8'} object-cover`}
              />
            </Link>
          ))}
        </div>
        <div className='mr-5 my-3 mt-5 fixed bottom-0 font-bold text-lg text-red-600'>
          <span>
            Click on the icon at the top to learn more.
          </span>
        </div>
      </section>
    );
  } else {
    return (
      <section className='max-container'>
        <div>
          <div className='text-6xl font-bold orange-gradient-text'>
            <h1>Hello,</h1>
            <h1>I am Arman Khan & I do</h1>
          </div>
          <TextTransition 
            springConfig={presets.gentle} 
            direction="down" 
            style={{
              marginTop: '1rem',
              fontSize: '3.75rem',
              lineHeight: '1',
              fontWeight: '700',
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
        <div className='mt-5 font-bold text-4xl orange-gradient-text'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='mt-5'>
          <a href='https://ak2341776.hackerresume.io/f4f17b26-462c-4ae4-94a7-1e900998a02f' target='_blank' rel='noreferrer'>
            <button className='px-3 py-1.5 font-semibold text-2xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
        <div className='flex gap-2 mt-5'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`${link.name === 'LinkedIn' ? 'linkedin-icon' : 'h-10 w-10'} object-cover`}
              />
            </Link>
          ))}
        </div>
      </section>
    );
  }
};

export default HomeInfo;
