import React from 'react'

const JobBoard = () => {
    const jobCount = 20
    const companyName = "ITOnline learning"

    const getJobMessage = () => {
        return jobCount===0 ? "No jobs to be Schedule Today" : `The Jobs to be completed ${jobCount}`
    };

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{getJobMessage()}</p>
      <p>Expected jobs next week: {jobCount * 1.5}</p>

    </div>
  )
};

export default JobBoard
