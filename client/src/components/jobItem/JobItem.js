import React, { useState } from 'react';
import './JobItem.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import StyledAvatarGroup from '../styledAvatarGroup/StyledAvatarGroup';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CardActions from '@material-ui/core/CardActions';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


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




// TODO: change cursor
export default function JobItem ({ job }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  function handleExpandClick () {
    setExpanded(!expanded);
  };
  function handleLikedClick () {
    setLiked(!liked);
  };

  return (
    <div className="job-item">
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
            return <div className="tag" key={tag}>{tag}</div>;
          })}
          </div>
          <div className="job-footer">
            <StyledAvatarGroup max={6}>
              {job.attendees.map((attendee) => {
                return <Avatar key={attendee} alt={attendee} src={`${attendee.img}`} />;
              })}
            </StyledAvatarGroup>
            <div className="job-actions">
              {/* <CardActions> */}
              <IconButton aria-label="add to favorites" onClick={handleLikedClick}>
                <CheckCircleIcon className={liked ? classes.liked : null} />
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
              {/* </CardActions> */}
            </div>
          </div>
        </div>
      </div>
      {expanded ?
        <div className="job-extra">
          <div className="job-description">{job.description}</div>
          <Button
            variant="contained"
            // color={liked ? 'grey' : 'primary'}
            className={liked ? classes.likeBtn : classes.waitBtn}
            startIcon={liked ? <CheckIcon /> : <PlaylistAddIcon />}
            onClick={handleLikedClick}
          >
            {liked ? 'Confirmed' : 'I will go!'}
          </Button>
        </div>
        : null
      }
    </div>
  );
}