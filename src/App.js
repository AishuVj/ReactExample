
import React from 'react';
import VariableDisplay from './VariableDisplay';
import ProfileCard from './ProfileCard';
import JobBoard from './JobBoard';
import "./styles.css";   // optional if you create a CSS file

const App = () => {
  const profiles = [
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications.",
      skills: ["React", "CSS", "JavaScript"]
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Sara Lee",
      jobTitle: "UI/UX Designer",
      bio: "Designs with empathy and a focus on user experience.",
      skills: ["Figma", "Adobe XD", "Wireframing"]
    },
    {
      image: "https://via.placeholder.com/150",
      name: "David Kim",
      jobTitle: "Backend Developer",
      bio: "Loves building robust server-side systems.",
      skills: ["Node.js", "MongoDB", "Express"]
    }
  ];

  return (
    <div className="app">
      <h1>Team Profiles</h1>

      <div className="profile-list">
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
            skills={profile.skills}
          />
        ))}
      </div>
      <VariableDisplay />
      <JobBoard/>
    </div>
  );
  
};

export default App;


