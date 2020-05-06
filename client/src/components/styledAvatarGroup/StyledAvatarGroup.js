import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { withStyles } from '@material-ui/core/styles';


const StyledAvatarGroup = withStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '1rem',
  },

}))(AvatarGroup);

export default StyledAvatarGroup;
