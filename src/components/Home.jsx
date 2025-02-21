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
              I'm a Modeling & Simulations Engineer. I love to learn new skills, large-scale projects peaks my interest and my dream is to develop one someday
            </div>
          </div>
        </FadeUp>
      </div>
  );
};

export default Home;