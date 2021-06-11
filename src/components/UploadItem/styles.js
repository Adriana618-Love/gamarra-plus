import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
  },
  button: {
    padding: 20,
  },
  title: {
    padding: 30,
  }
}));
