import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar'
import CalculatorSlider from './CalculatorSlider';

export class CreditCalculator extends React.Component {

  constructor(){
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = 
    {
      isAlertOpened: false,
      message: '',
      inputMonthsValue: '',
      inputLoanValue: ''
    };
  }

  onButtonClick()  {
    this.setState({isAlertOpened: false});
    setTimeout(() => {
    this.updateLoanInputValue();
    this.updateMonthsInputValue();
    this.calculateLoanPayment();
    this.setState({
      isAlertOpened: true
    });}, 1000);    
  }

  calculateLoanPayment(){
    this.setState({
      message: `Loan monthly payment: ${Math.round(this.state.inputLoanValue/this.state.inputMonthsValue) + 10} $, 
      Term: ${this.state.inputMonthsValue} months.`
    });
  }  

  updateMonthsInputValue() {
    var months = Number(document.getElementById("totalMonthsInput").value);
    this.setState({
      inputMonthsValue: months
    });
    console.log(`months: ${this.state.inputMonthsValue}`);
  }

  updateLoanInputValue() {
    var loanValue = Number(document.getElementById("totalLoanInput").value);
    this.setState({
      inputLoanValue: loanValue
    });
    console.log(`loan: ${this.state.inputLoanValue}`);
  }

  componentDidMount(){
    console.log(`${this.state.inputLoanValue}, ${this.state.inputMonthsValue}`);
  }

  componentWillUnmount(){
  }

    render() {
      return (
        <React.Fragment>
        <h1>Calculate your loan payment</h1>
        <div>Select credit term</div>
        <CalculatorSlider dataid="totalMonthsInput" rangeMin="0" rangeMax="60" label="months" initialValue="24"/>
        <div>Select total loan amount</div>
        <CalculatorSlider dataid="totalLoanInput" rangeMin="0" rangeMax="21001" label="$" initialValue="500"/>
        <Button variant="contained" color="primary" onClick={this.onButtonClick}>
            Calculate now
        </Button>
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={this.state.isAlertOpened}
        autoHideDuration={1}
        message={this.state.message}
      />
        </React.Fragment>
      );
    }
}

export default CreditCalculator;