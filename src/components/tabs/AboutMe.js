import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import mano from '../../imgs/mano2.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
    textAlign: 'justify',
  },
  media: {
    height: 240,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AboutMe() {
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
      className={classes.fullList}
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
      className={classes.fullList}
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mano}
          title="Mano"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Hey! this is Mano, born in pondicherry currently living in chennai. I started my career 
              as a lecturer and moved on to my passionate developer job. Currently i have 7 years
              of teaching and 3 years of software industry experience. I am quick learner and addicted to learn 
              new techs to upskill and try out new stuffs. As learning is essentional for everyone, it is also
              must that we should share our knowledge to others which we knew. Check out my skills and tech talks.
              I am an enthusiastic developer who can deliver things at right time with right cost, hire me if you are looking for a freelancer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={toggleDrawer('bottom1', true)}> 
          Share
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
