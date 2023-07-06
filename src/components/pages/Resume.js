import React from 'react';
import ResumeImg from '../../images/Joshua_Sandquist_Resume_2023.png';

const Resume = () => {
  const frontEndProficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'];
  const backEndProficiencies = ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Jest', 'RESTful API', 'GraphQL' ];

  return (
    <div className='resumePage'>
    <h2>Resume</h2>
    <div className='proficiencies'>
        <h3>Front-end Proficiencies:</h3>
        <ul>
          {frontEndProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>

        <h3>Back-end Proficiencies:</h3>
        <ul>
          {backEndProficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <img src={ResumeImg} alt='Josh Sandquist Resume' />

      
    </div>
  );
};

export default Resume;