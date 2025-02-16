import React from 'react';
import JobList from './JobList';
import FadeUp from './FadeUp';
import "../styles/Experience.css";

function Experience() {
  return (
    <div id='experience'>
        <FadeUp>
            <div className="section-header">
                <span className="section-title">Experience</span>
            </div>
            <JobList></JobList>
        </FadeUp>
    </div>
  );
}

export default Experience;