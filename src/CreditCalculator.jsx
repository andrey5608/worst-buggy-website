import React from 'react';
import Button from '@material-ui/core/Button';
import CalculatorSlider from './CalculatorSlider';

class CreditCalculator extends React.Component {
    render() {
      return (
        <React.Fragment>
        <h1>Calculate your payment with our site</h1>
        <div>Title</div>
        <CalculatorSlider title="asd" />
        <Button variant="contained" color="primary">
            Calculate now
        </Button>
        </React.Fragment>
      );
    }
}

export default CreditCalculator;