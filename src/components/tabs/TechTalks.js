import React from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 
class TechTalks extends React.Component {

 
  render() {

    const classes = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          boxShadow: 'none',
        },
      }))

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { 
        autoplay: 0
      }
    };
  
    return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Tech Talks
        </Grid>
        <Grid item xs={4}>
            <YouTube
                videoId="IcCWpEE-sz4"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
        <Grid item xs={4}>
            <YouTube
                videoId="VnwM123VXjc"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
        <Grid item xs={4}>
        <YouTube
                videoId="aXdqjvTJPEc"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
        <Grid item xs={4}>
        <YouTube
                videoId="33G317t-FoQ"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
        <Grid item xs={4}>
        <YouTube
                videoId="jfH9-2DDsXc"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
        <Grid item xs={4}>
        <YouTube
                videoId="eUe86q7MuJw"
                opts={opts}
                onReady={this._onReady}
            />
        </Grid>
      </Grid>
    </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default TechTalks