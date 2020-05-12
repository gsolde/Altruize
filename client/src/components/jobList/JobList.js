import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';
import { getAllActiveEvents } from '../../services/EventsAPI';

import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../services/UsersAPI';

import { allEventsList, myEventsList, searchedEventsList } from '../../actions';

export default function JobList() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const eventQuerySelector = useSelector((state) => state.eventSelectionButton);
  const searchedEventList = useSelector((state) => state.searchedEventsList);
  
  const [jobs, setJobs] = useState([]);

  const getEvents = async () => {
    if(eventQuerySelector === "ALL EVENTS") getActiveEvents();
    if(eventQuerySelector === "MY EVENTS") getMyEvents();
  }

  const getActiveEvents = async () => {
    const jobList = await getAllActiveEvents();
    dispatch(allEventsList(jobList));
    setJobs(jobList);
  };
  
  const getMyEvents = async () => {
    const myEventList = await getUserById({user_id: userId});
    dispatch(myEventsList(myEventList.Events));
    dispatch(searchedEventsList([]));
    setJobs(myEventList.Events);
  }

  useEffect(() => {
    getEvents();
  }, [eventQuerySelector]);

  if (searchedEventList.length > 0) {
    return (
      <div className="list-wrapper">
      <div className="list">
        {searchedEventList.map((job) => {
          return <JobItem
            key={job.id}
            job={job}
          />;
        })}
      </div>
    </div>
    ) 
  } else {
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
}