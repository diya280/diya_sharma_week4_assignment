import React, { useState } from 'react';
import jobsData from './data/jobs';
import SearchBar from './components/searchBar';
import JobList from './components/jobList';
import Pagination from './components/Pagination';
import JobApplicationForm from './components/JobApplicationForm';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const filteredJobs = jobsData.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter ? job.location === locationFilter : true)
    );
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="container">
     <h1 style={{ textAlign: "center" }}>Job Board</h1>

      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setLocationFilter={setLocationFilter} 
      />

      <JobList jobs={currentJobs} />

      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        handlePageChange={setCurrentPage} 
      />

      <h2 className="my-4" style={{ textAlign: "center" }}>Apply for a Job</h2>
      <JobApplicationForm />
    </div>
  );
};

export default App;
