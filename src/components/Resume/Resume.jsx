import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <h3>Professional Experience</h3>
      <ul>
        <li>
          <h4>Job Title</h4>
          <p>Company Name | Location | Start Date - End Date</p>
          <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
          </ul>
        </li>
        {/* Add more job experience entries as needed */}
      </ul>

      <h3>Education</h3>
      <ul>
        <li>
          <h4>Degree</h4>
          <p>Institution | Location | Graduation Year</p>
        </li>
        {/* Add more education entries as needed */}
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        {/* Add more skills as needed */}
      </ul>
    </div>
  );
};

export default Resume;
