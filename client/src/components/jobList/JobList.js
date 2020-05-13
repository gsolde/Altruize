import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobItem from '../jobItem/JobItem.js';
import { getAllActiveEvents } from '../../services/EventsAPI';

import { useSelector, useDispatch } from 'react-redux';
import { getUserById } from '../../services/UsersAPI';
import { getOrgById } from '../../services/OrgsAPI';

import { 
  allEventsList, 
  myEventsList, 
  searchedEventsList, 
  eventSelectionButton, 
  orgEventsList 
} from '../../actions';

export default function JobList() {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const orgId = useSelector(state => state.orgId);
  const eventQuerySelector = useSelector((state) => state.eventSelection);
  const searchedEvents = useSelector((state) => state.searchedEventsList);

  const [jobs, setJobs] = useState([]);
  
  const getEvents = async () => {
    if(eventQuerySelector === 'ALL EVENTS') getActiveEvents();
    if(eventQuerySelector === 'MY EVENTS') getMyEvents();
  }

  const getActiveEvents = async () => {
    const jobList = await getAllActiveEvents();
    dispatch(allEventsList(jobList));
    dispatch(eventSelectionButton('ALL EVENTS'))
    setJobs(jobList);
  };

  const getMyEvents = async () => {
    if (userId) {
      const myEventList = await getUserById({user_id: userId});
      myEventList && dispatch(myEventsList(myEventList.Events));
      myEventList && setJobs(myEventList.Events);
      dispatch(searchedEventsList([]));
    } 
    if (orgId) {
      const orgEventList = await getOrgById({org_id: orgId});
      dispatch(orgEventsList(orgEventList.Events));
      setJobs(orgEventList.Events);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  if (searchedEvents.length >= 1) {
    return (
      <div className="list-wrapper">
      <div className="list">
        {searchedEvents.map((job) => {
          return <JobItem
            key={job.id}
            job={job}
            updateEvents={getEvents} //passed to jobItem to rerender on change. Needs to be refactored!
          />;
        })}
      </div>
    </div>
    )
  } else {
    return (
      <div className="list-wrapper">
        <div className="list">
          {jobs && jobs.map((job) => {
            return <JobItem
              key={job.id}
              job={job}
              updateEvents={getEvents}
            />;
          })}
        </div>
      </div>
    );
  }
}