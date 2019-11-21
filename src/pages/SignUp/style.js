import { green } from '@material-ui/core/colors';

const style = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  fabProgress: {
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  fabProgressWrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  green: {
    backgroundColor: green[500]
  }
});

export default style;
