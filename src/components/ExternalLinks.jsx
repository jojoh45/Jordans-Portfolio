import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function ExternalLinks(props) {
  return (
    <span className="external-links">
        <a href={props.githubLink} className="github-icon">
            <GitHubIcon 
            style={
                {fontSize: 20}}>
            </GitHubIcon>
        </a>
    </span>
  );
};

export default ExternalLinks;