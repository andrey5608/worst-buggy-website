import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import './CalculatorSlider.css'

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "auto"
  },
  input: {
    width: 42
  },
  
});

export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(Number(props.initialValue));

  const maxValue = props.rangeMax;

  const handleSliderChange = (event, newValue) => {
    if (newValue < 0) {
        setValue(0);
      } else if (newValue > maxValue) {
        setValue(maxValue);
      } else{
          setValue(newValue);
      }
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > maxValue) {
      setValue(maxValue);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
      </Typography>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={Number(props.rangeMin)}
            max={Number(props.rangeMax)}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: props.rangeMin,
              max: props.rangeMax,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            id={props.dataid}
          /> {props.label}
        </Grid>
      </Grid>
    </div>
  );
}