import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';
import { getAllActiveEvents } from '../../services/EventsAPI';

import { useSelector, useDispatch } from 'react-redux';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const eventQuerySelector = useSelector((state) => state.eventSelection);

  const getEvents = async () => {
    eventQuerySelector === "ALL EVENTS" && getActiveEvents();
  }

  const getActiveEvents = async () => {
    const jobList = await getAllActiveEvents();
    setJobs(jobList);
  };

  useEffect(() => {
    getEvents();
  }, [eventQuerySelector]);

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