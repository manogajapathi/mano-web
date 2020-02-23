import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mano from '../../imgs/mano2.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 1024,
    textAlign: 'justify',
  },
  media: {
    height: 240,
  },
});

export default function AboutMe() {
  const classes = useStyles();

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
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Hire Me
        </Button>
      </CardActions>
    </Card>
  );
}
