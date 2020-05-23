import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
const useStyles = makeStyles({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    background: 'white'
  },
});


export default function Footer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom1: false,
    bottom2: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const share = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <Typography variant="body2" color="textSecondary" component="p">
        Oops! 404 - Working on this feature 
    </Typography>
    </div>
  );

  const hire = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <Typography variant="body2" color="textSecondary" component="p">
        Oops! 404 - Sorry i am not available to hire now 
    </Typography>
    </div>
  );
  return (
    <Card className={classes.footer}>
      <CardActions>
        <Button size="small" color="primary"> 
          <a href="tel:[919578042320]" style={{textDecoration: 'none',color: '#3f51b5'}}>Call</a>
        </Button>
        <Button size="small" color="primary"> 
        <a href="https://wa.me/919578042320" style={{textDecoration: 'none',color: '#3f51b5'}}>Whatsapp</a>
        </Button>
        <Button size="small" color="primary" onClick={toggleDrawer('bottom2', true)}>
          Hire Me
        </Button>
        <SwipeableDrawer
        anchor="bottom"
        open={state.bottom2}
        onClose={toggleDrawer('bottom2', false)}
        onOpen={toggleDrawer('bottom2', true)}
        >
        {hire('bottom2')}
        </SwipeableDrawer>
        <SwipeableDrawer
        anchor="bottom"
        open={state.bottom1}
        onClose={toggleDrawer('bottom1', false)}
        onOpen={toggleDrawer('bottom1', true)}
        >
        {share('bottom1')}
        </SwipeableDrawer>
      </CardActions>
    </Card>
  );
}
