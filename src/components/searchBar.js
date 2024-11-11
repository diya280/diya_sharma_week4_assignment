import React, { useState, useEffect } from 'react';
import jobs from '../data/jobs';

const SearchBar = ({ searchTerm, setSearchTerm, setLocationFilter, locationFilter }) => {
  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase())   
        &&     
        (locationFilter ? job.location === locationFilter : true)
      );
    });
    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter]);

  return (
    <div className="search-bar-container">
      <h2 className="search-bar-title">Find Your Dream Job</h2>

      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control search-input"
        />

        <select
          onChange={(e) => setLocationFilter(e.target.value)}
          className="form-control search-select"
          value={locationFilter}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    
      {filteredJobs.length === 0 && (
        <p style={{ textAlign: "center", color: "red", marginTop: "16px", marginBottom: "7px", }}>No job available at this position</p>
      )}
    </div>
  );
};

export default SearchBar;
