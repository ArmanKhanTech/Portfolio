import React from 'react';

import { NavLink } from "react-router-dom";
import TextTransition, { presets } from 'react-text-transition';
import HireButton from './HireButton';
import { github, linkedin } from '../assets/icons';

const TEXTS = [
  'Web Development', 
  'App Development', 
  'UI/UX Design', 
  'Machine Learning',
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
        <div className='mt-4 font-bold text-xl orange-gradient-text'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='my-3'>
          <a href='https://drive.google.com/file/d/1XZl9eZLcGw7x5FQZG6w8i8z9vQw3wW0u/view?usp=sharing' target='_blank' rel='noreferrer'>
            <button className='px-3 py-1.5 font-semibold text-xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
        <div className='flex space-x-2 mt-3'>
          <a href='https://github.com/ArmanKhanTech' target='_blank' rel='noreferrer'>
            <img src={github} alt='github' className='w-8 h-8 object-contain transition-transform hover:scale-110' />
          </a>
          <a href='https://www.linkedin.com/in/arman-khan-25b624205/' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='linkedin' className='linkedin-icon-mobile object-contain transition-transform hover:scale-110' />
          </a>
        </div>
        <div className='mr-5 my-3 fixed bottom-0 font-bold text-base orange-gradient-text'>
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
        <div className='mt-5 font-semibold text-3xl orange-gradient-text'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='mt-5'>
          <a href='https://drive.google.com/file/d/1XZl9eZLcGw7x5FQZG6w8i8z9vQw3wW0u/view?usp=sharing' target='_blank' rel='noreferrer'>
            <button className='px-3 py-1.5 font-semibold text-2xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
        <div className='flex space-x-2 mt-5'>
          <a href='https://github.com/ArmanKhanTech' target='_blank' rel='noreferrer'>
            <img src={github} alt='github' className='w-10 h-10 object-contain' />
          </a>
          <a href='https://www.linkedin.com/in/arman-khan-1b4b3a1a6/' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='linkedin' className='linkedin-icon object-contain' />
          </a>
        </div>
      </section>
    );
  }
};

export default HomeInfo;
