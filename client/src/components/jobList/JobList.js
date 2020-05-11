import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';
import { getAllActiveEvents } from '../../services/EventsAPI';

import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../services/UsersAPI';

export default function JobList() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId); // we can pass it to children an take it form JobItem
  const [jobs, setJobs] = useState([]);
  const eventQuerySelector = useSelector((state) => state.eventSelectionButton);

  const getEvents = async () => {
    if(eventQuerySelector === "ALL EVENTS") getActiveEvents();
    if(eventQuerySelector === "MY EVENTS") getMyEvents();
  }

  const getActiveEvents = async () => {
    const jobList = await getAllActiveEvents();
    setJobs(jobList);
  };

  const getMyEvents = async () => {
    const myEventList = await getUserById({user_id: userId});
    setJobs(myEventList.Events);
  }

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