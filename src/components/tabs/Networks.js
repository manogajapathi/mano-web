import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fb from '../../imgs/logos/fb.png';
import twit from '../../imgs/logos/twit.png';
import link from '../../imgs/logos/linkedin.png';
import git from '../../imgs/logos/git.png';
import insta from '../../imgs/logos/insta.png';
import smule from '../../imgs/logos/smule.png';
import ytube from '../../imgs/logos/ytube.png';
import wp from '../../imgs/logos/wp.png';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    paddingBottom: "30px"
  },
}));

export default function Networks() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <Grid container >
      <Grid item xs={12} className={classes.input}>Social Networks
      </Grid>
      <Grid item xs={3}>
      <a href="http://www.github.com/manogajapathi" target="_blank" rel="noopener noreferrer"><img src={git} height="60px" width="60px" alt="GitHub" className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <a href="http://www.linkedin.com/in/manogajapathi" target="_blank" rel="noopener noreferrer"><img src={link} height="60px" width="60px" alt="LinkedIn" className={classes.input}/>
      </a></Grid>
      <Grid item xs={3}>
      <a href="http://www.instagram.com/manogajapathi" target="_blank" rel="noopener noreferrer">
      <img src={insta} height="60px" width="60px" alt="Instagram" className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <a href="http://www.twitter.com/manogajapathi" target="_blank" rel="noopener noreferrer">
      <img src={twit} height="60px" width="60px" alt="Twitter" className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <a href="http://www.facebook.com/manogajapathi" target="_blank" rel="noopener noreferrer">
      <img src={fb} height="60px" width="60px" alt="FaceBook"  className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <a href="http://www.youtube.com/classadviser" target="_blank" rel="noopener noreferrer">
      <img src={ytube} height="60px" width="60px" alt="Youtube" className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <a href="https://www.smule.com/ManoGajapathi" target="_blank" rel="noopener noreferrer">
      <img src={smule} height="60px" width="60px" alt="Smule" className={classes.input}/></a>
      </Grid>
      <Grid item xs={3}>
      <img src={wp} height="60px" width="60px" alt="WhatsApp" className={classes.input}/>
      </Grid>
      </Grid>
    </div>
  );
}
