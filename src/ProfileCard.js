
import React from 'react';

const ProfileCard = ({ image, name, jobTitle, bio, skills }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />

      <h2>{name}</h2>
      <h4>{jobTitle}</h4>
      <p>{bio}</p>

      {/* BONUS: Display skills if provided */}
      {skills && (
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
