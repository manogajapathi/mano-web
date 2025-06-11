import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import mano from '../../imgs/mano2.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
    textAlign: 'justify',
  },
  media: {
    height: 500,
    align: 'bottom'
  },
  fullList: {
    width: 'auto',
  },
});

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          About Me
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Hey! this is Mano, born in pondicherry currently living in chennai. I started my career
          as a lecturer and moved on to my passionate developer job. Currently i have 7 years
          of teaching and 8+ years of software industry experience. I am quick learner and addicted to learn
          new techs to upskill and try out new stuffs. As learning is essential for everyone, it is also
          must that we should share our knowledge to others which we knew. Check out my skills and tech talks.
          <br /><br />
        </Typography>
      </CardContent>
      <CardActionArea>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >

          <Grid item xs={3}>
            <Card>
{/* <            <CardMedia
          image={mano}
          title="Mano"
        />> */}
        <img src={mano}/>
            </Card>
          </Grid>
        </Grid>

      </CardActionArea>
    </Card>
  );
}
