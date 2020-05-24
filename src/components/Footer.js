import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

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
  
  return (
    <Card className={classes.footer}>
      <CardActions>
        <Button size="small" color="primary"> 
          <a href="tel:[919578042320]" style={{textDecoration: 'none',color: '#3f51b5'}}>Call</a>
        </Button>
        <Button size="small" color="primary"> 
        <a href="https://wa.me/919578042320" style={{textDecoration: 'none',color: '#3f51b5'}}>Whatsapp</a>
        </Button>
        <Button size="small" color="primary">
        <a style={{textDecoration: 'none',color: '#3f51b5'}} href="mailto:manogajapathi@gmail.com?subject=Interested in Hiring you!&body=Hi Mano">Mail</a>  
        </Button>
      </CardActions>
    </Card>
  );
}
