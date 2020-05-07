import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';
import { getAllActiveEvents } from '../../services/EventsAPI';

import jobs from '../../mockData.json';

export default function JobList () {

  const [jobs, setJobs] = useState([]);

  const getActiveEvents = async () => {
    const jobList = await getAllActiveEvents();
    setJobs(jobList);
  };

  useEffect(() => {
    getActiveEvents();
  }, []);

  return (
    <div className="list-wrapper">
      <div className="list">
        {jobs.map((job) => {
          return <JobItem
            key={job.id}
            job={job}
          />;
        })}
      </div>
    </div>
  );
}