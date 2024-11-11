import React from 'react';


const JobList = ({ jobs }) => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h5 className="job-title">{job.title}</h5>
          <p className="job-company-location">
            <strong>{job.company}</strong> | {job.location}
          </p>
          <p className="job-description">{job.description}</p>
          <button className="btn btn-primary btn-sm job-button">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
