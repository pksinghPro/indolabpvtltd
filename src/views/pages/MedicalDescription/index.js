import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  withStyles,
  Box,
  Grid,
  Container,
  Paper,
  Link,
} from "@material-ui/core";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepContent from "./StepContent";
import StepContent2 from "./StepContent2";
import StepContent3 from "./StepContent3";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: "-56px",
    height: "2px",
    width: "2px",
  },
  active: {
    "& $line": {
      backgroundColor: "#EAB73B",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#EAB73B",
    },
  },
  line: {
    height: "100%",
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#000",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#EAB73B",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#EAB73B",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3",
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "30px 0px 30px 0px",
    "& h3": {
      fontSize: "26px",
      fontWeight: "600",
      color: theme.palette.background.yellow,
      marginBottom: "15px",
      marginTop: "20px",
    },
    "& h6": {
      color: theme.palette.primary.main,
      width: "100%",
      maxWidth: "574px",
      width: "100%",
      marginBottom: "44px",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    // marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  contactbox: {
    padding: "30px 30px 70px",
    borderRadius: "5px",
    // marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 15px 50px",
    },
    "& h4": {
      fontWeight: "300",
      color: theme.palette.primary.main,
      marginBottom: "30px",
      marginTop: "20px",
    },
  },
  buttonboxes: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "413px",
    margin: "0 auto",
    paddingBottom: "60px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "100%",
      maxWidth: "100%",
    },
    "& button": {
      fontSize: "14px",
      fontWeight: "500",
      color: theme.palette.primary.greyWhite,
      margin: "0px 20px",
      marginBottom: "10px",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10px",
        margin: "0px",
      },
    },
  },
}));

function getSteps() {
  return ["User Information", "Upload Document", "Confirm your details"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepContent />;
    case 1:
      return <StepContent2 />;
    case 2:
      return <StepContent3 />;
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h3">KYC Idendificatons</Typography>
        <Typography variant="h6">
          Well start Id Verification for you. Please have your ID in Hand:Id
          Verification Original documents only,no photocopy, Government-issued.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
              orientation="vertical"
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={9}>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Box
                    component={Paper}
                    textAlign="center"
                    className={classes.contactbox}
                  >
                    <Typography variant="h4">
                      Your document has been submitted. kindly wait for review
                    </Typography>
                    <Button
                      onClick={handleReset}
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      size="large"
                    >
                      Reset
                    </Button>
                  </Box>
                </div>
              ) : (
                <div>
                  <Box className={classes.instructions} component={Paper}>
                    {getStepContent(activeStep)}
                    <Box
                      py={2}
                      textAlign="center"
                      className={classes.buttonboxes}
                    >
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Box>
                  </Box>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
