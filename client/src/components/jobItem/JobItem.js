import React from 'react';
import './JobItem.css';
import moment from 'moment';

export default function JobItem({ job }) {
  return (
    <div className="job-item">
      <div className="job-img-owner">
        <img className="img" src={job.profilePic} alt={job.name} />
        <div className="event-owner">{job.eventOwner}</div>
      </div>
      <div className="job-main-info">
        <div>{moment(job.startDate).format('Do, MMMM YYYY, h:mm a')}</div>
        {/* <div>{job.finishDate}</div> */}
        <div>{job.name}</div>
        <div>{job.location}</div>
        <div className="job-tags">{job.tags.map((tag) => {
          return <div key={tag}>{tag}</div>
        })}</div>
        <div className="job-attendees">{job.attendees.map((attendee) => {
          return <div key={attendee}>{attendee}</div>
        })}</div>
      </div>
      {/* <div className="job-description">{job.description}</div> */}
    </div>
  );
}