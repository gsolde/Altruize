import React, { useState } from 'react';
import './JobItem.css';
import moment from 'moment';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import StyledAvatarGroup from '../styledAvatarGroup/StyledAvatarGroup';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { addEventToUser, deleteEventFromUser } from '../../services/UsersAPI';

import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  liked: {
    color: teal[500],
  },
  likeBtn: {
    margin: theme.spacing(1),
    backgroundColor: teal[500],
    color: 'white',
  },
  waitBtn: {
    margin: theme.spacing(1),
    backgroundColor: grey.A200,
    border: '1px',
    borderBlockColor: teal[500],
    color: 'white',
  },
}));

export default function JobItem ({ job, updateEvents }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const attendeesList = job.Users.map(attendee => attendee.id);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(attendeesList.indexOf(userId) !== -1 ? true : false);

  function handleExpandClick () {
    setExpanded(!expanded);
  };

  async function handleLikedClick () {
    let event_id = job.id;
    let user_id = userId;
    console.log()
    if(liked && userId) {
      await deleteEventFromUser({
        user_id,
        event_id
      })
      updateEvents()
    } else if (userId){
      await addEventToUser({
        user_id,
        event_id
      });
      updateEvents();
    }
    setLiked(!liked);
  };

  return (
    <div className="job-item">
      <div className="job-card">
        <div className="job-img-owner">
          <img className="img" src={job.picture} alt={job.event_name} />
          <div className="event-owner">{job.Orgs[0] !== undefined ? job.Orgs[0].org_name : null}</div>
        </div>
        <div className="job-main-info">
          <div className="date">{moment(job.start_date).format('Do, MMMM YYYY, h:mm a')}</div>
          <div className="title">{job.event_name.toUpperCase()}</div>
          <div className="location">
            <FontAwesomeIcon icon={faMapMarker} />
            {` ${job.location}`}
          </div>
          {job.Tags ?
            <div className="job-tags">{job.Tags.map((tag) => {
              return <div className="tag" key={tag.id}>{tag.tag_name}</div>;
            })}
            </div>
            :
            <div className="tag" >No tags</div>
          }
          <div className="job-footer">
            <StyledAvatarGroup max={4}>
              {job.Users.map((attendee) => {
                return <Avatar key={attendee.id} alt={attendee.user_name} src={`${attendee.profile_pic}`} />;
              })}
            </StyledAvatarGroup>
            <div className="job-actions">
              <IconButton aria-label="add to favorites" onClick={handleLikedClick}>
                <CheckCircleIcon className={liked && userId ? classes.liked : null} />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {expanded ?
        <div className="job-extra">
          <div className="job-description">{job.description}</div>
          <Button
            variant="contained"
            className={liked ? classes.likeBtn : classes.waitBtn}
            startIcon={liked ? <CheckIcon /> : <PlaylistAddIcon />}
            onClick={handleLikedClick}
          >
            {liked ? 'Confirmed' : 'I\'m in!'}
          </Button>
        </div>
        : null
      }
    </div>
  );
}