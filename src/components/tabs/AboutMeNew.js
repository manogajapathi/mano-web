import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import mano from '../../imgs/mano2.png';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function AboutMeNew() {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h4" color="primary" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body2"  component="p">
                                Hey! this is Mano, born in pondicherry currently living in chennai. I started my career
                                as a lecturer and moved on to my passionate developer job. Currently i have 7 years
                                of teaching and 5+ years of software industry experience. I am quick learner and addicted to learn
                                new techs to upskill and try out new stuffs. As learning is essential for everyone, it is also
                                must that we should share our knowledge to others which we knew. Check out my skills and tech talks.
                                <br /><br />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="mano" src={mano} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Paper>
    );
}