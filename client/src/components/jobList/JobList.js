import React from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';

import jobs from '../../mockData.json';

export default function JobList() {
  return (
    <div className="list-wrapper">
      <div className="list">
        {jobs.map((job) => {
          return <JobItem
            key={job.id}
            job={job}
          />
        })}
      </div>
    </div>
  );
}