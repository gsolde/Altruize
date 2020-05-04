import React, { useState } from 'react';
import './JobItem.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

// TODO: change cursor
export default function JobItem({ job }) {
  const [clicked, setClicked] = useState(true);

  function onClickHandler() {
    return setClicked(!clicked);
  }

  return (
    <div className="job-item" onClick={onClickHandler}>
      <div className="job-card">
        <div className="job-img-owner">
          <img className="img" src={job.profilePic} alt={job.name} />
          <div className="event-owner">{job.eventOwner}</div>
        </div>
        <div className="job-main-info">
          <div className="date">{moment(job.startDate).format('Do, MMMM YYYY, h:mm a')}</div>
          {/* <div>{job.finishDate}</div> */}
          <div className="title">{job.name.toUpperCase()}</div>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarker} />
            {` ${job.location}`}
          </div>
          <div className="job-tags">{job.tags.map((tag) => {
            return <div className="tag" key={tag}>{tag}</div>
          })}</div>
          <div className="job-attendees">{job.attendees.map((attendee) => {
            return <div className="attendee" key={attendee}>{attendee}</div>
          })}</div>
        </div>
      </div>
      {clicked ?
        <div className="job-extra">
          <div className="job-description">{job.description}</div>
          <button className="job-button">
            I will attend!
        </button>
        </div>
        : null
      }
    </div>
  );
}