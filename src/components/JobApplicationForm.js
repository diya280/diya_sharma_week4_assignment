import React from 'react';


const JobApplicationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="job-application-form">
      <h3 className="form-title">Apply for the Job</h3>
      
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="form-control form-input mb-3" 
          required 
        />
      </div>
      
      <div className="form-group">
        <input 
          type="email" 
          placeholder="Your Email" 
          className="form-control form-input mb-3" 
          required 
        />
      </div>
      
      <div className="form-group">
        <textarea 
          placeholder="Cover Letter" 
          className="form-control form-input mb-3" 
          rows="4" 
          required 
        ></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary btn-block form-submit-button">
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
