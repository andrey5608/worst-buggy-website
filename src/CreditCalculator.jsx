import React from 'react';
import Button from '@material-ui/core/Button';
import CalculatorSlider from './CalculatorSlider';

class CreditCalculator extends React.Component {
    render() {
      return (
        <React.Fragment>
        <h1>Calculate your loan payment</h1>
        <div>Select credit period</div>
        <CalculatorSlider dataid="totalMonthsInput" rangeMin="0" rangeMax="60" label="months" initialValue="24"/>
        <div>Select total loan amount</div>
        <CalculatorSlider dataid="totalLoanInput" rangeMin="0" rangeMax="21001" label="$" initialValue="500"/>
        <Button variant="contained" color="primary">
            Calculate now
        </Button>
        </React.Fragment>
      );
    }
}

export default CreditCalculator;