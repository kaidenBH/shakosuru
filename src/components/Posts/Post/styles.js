import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  bottomSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: '25px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0',
    height: '2.5rem',
    borderTop: '1px solid #d1d1d1',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#f2f2f2',
  },
  separator:{
    height: '100%',
    width: '1px',
    backgroundColor: '#d1d1d1',
  },
  popover: {
    display: 'flex',
    zIndex: '5',
    flex: 1,
    justifyContent: 'center',
  },
  confirmationPop : {
    padding: '10px',
  },
  ConfirmationButtons: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});