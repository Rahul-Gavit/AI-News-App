import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: '#FFFFF0',
    border:'2px solid black'
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },

  container: {
    padding: '0 5%', width: '100%', margin: 0,
  },
});
