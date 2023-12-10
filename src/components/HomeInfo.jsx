import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  'Web Development', 
  'Android Development', 
  'Flutter Development', 
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
          <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600'>
            <h1>Hello 👋🏻,</h1>
            <h1>I am Arman Khan</h1>
          </div>
          <TextTransition 
            springConfig={presets.gentle} 
            direction="down" 
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: '700',
              color: '#ec144a' }}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
        <div className='mt-3 font-bold text-1xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='mt-3'>
          <a href='https://drive.google.com/file/d/1XZl9eZLcGw7x5FQZG6w8i8z9vQw3wW0u/view?usp=sharing' target='_blank' rel='noreferrer'>
            <button className='px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
        <div className='m-2 items-center justify-center fixed bottom-0 font-bold text-1xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600'>
          <span>
            Click on icon above to learn more.
          </span>
        </div>
      </section>
    );
  } else {
    return (
      <section className='max-container'>
        <div>
          <div className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600'>
            <h1>Hello 👋🏻,</h1>
            <h1>I am Arman Khan</h1>
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
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
        <div className='mt-5 font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600'>
          <span>
            Currently a third year Computer Engineering student from India.
          </span>
        </div>
        <div className='mt-5'>
          <a href='https://drive.google.com/file/d/1XZl9eZLcGw7x5FQZG6w8i8z9vQw3wW0u/view?usp=sharing' target='_blank' rel='noreferrer'>
            <button className='px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110'>
              Resume
            </button>
          </a>
        </div>
      </section>
    );
  }
};

export default HomeInfo;
