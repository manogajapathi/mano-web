import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'left',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['2010', '2015', '2017', '2018', '2019', '2020','2021'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Started my career as a Lecturer at Christ college of 
              Engineering and Technology after completing my UG B.E CSE.`;
    case 1:
      return `Completed M.E CSE and promoted as Assistant Professor at 
              Christ College of Enginnering and Technology`;
    case 2:
      return `After 7 years of Teaching, applied and got selected in a start-up
              company AUZMOR as a Software Engineer. Learned many new things and upskilled myself`;
    case 3:
      return `With my new skills like reactjs and node, applied and got an opportunity 
              in Newt Global India PVT LMT as Software Engineer. Joined Verizon through newt`;
    case 4:
      return `Got an Offer from TechStar Groups as Software Engineer to work in Verizon as 
              contractual again.`;
    case 5:
      return `Promoted as Senior Software Engineer in TechStar Groups and
              Currently working in Verizon Olympia Tech Park.`;
    case 6:
      return `Got offer from Collabera technologies as Senior Software Engineer and
      Currently working in Paypal chennai.`;
    default:
      return 'Unknown step';
  }
}

export default function Works() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>That's all about my career</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
