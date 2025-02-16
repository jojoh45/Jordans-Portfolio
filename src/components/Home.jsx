import React from 'react';
import { Typewriter, Cursor} from 'react-simple-typewriter';
import FadeUp from './FadeUp';
import '../styles/Home.css';

function Home() {
  return (
    <div id='intro'>
        <span className='typewriter'>
          <Typewriter
              words={['Welcome! Glad you are here!', 'I graduated from morgan state university', 'I love sports (go ravens!!)', 'I love working out and traveling in my free time', 'My name is Jordan!', 'Thanks for stopping by']}
              loop={true}
              cursor // show cursor
              />
        </span>
        <FadeUp delay={.6}>
          <div className='intro-title'>
            Jordan Johnson
          </div>
          <div>
            <div className='intro-desc'>
              My name is Jordan Johnson and I am a full-stack developer. I am a recent graduate from Morgan State University with a degree in Information Science and Systems. I am passionate about coding and I am always looking for new ways to improve my skills. I am always looking for new opportunities to learn and grow as a developer. I am excited to see where my coding journey takes me and I am looking forward to the future.
            </div>
          </div>
        </FadeUp>
      </div>
  );
};

export default Home;