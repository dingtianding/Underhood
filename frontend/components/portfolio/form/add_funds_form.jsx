import React from 'react';

export default class AddFundsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    let newValue = e.currentTarget.value.split('$').join('');
    newValue = newValue.split(',').join('');
    if (!isNaN(newValue)) {
      this.setState({ amount: `$${parseInt(newValue).toLocaleString("en-US")}`})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let numValue = this.state.amount.split('$').join('')
    numValue = numValue.split(',').join('');
    numValue = parseInt(numValue);

    this.props.addFunds(this.props.user.id, numValue)
      .then(() => {
        // this.props.fetchTransactions(this.props.user.id)
        document.querySelector('.funds-modal').classList.toggle('hidden')
      }, 
      (error) => {
      $('#add-amount').append(`<div>{error.responseJSON.map(err => <div>err</div>)}</div>`)
    });
    
    const body = document.querySelector("body");
    body.style.overflow = "auto";  }

  clickClose (e){
    e.preventDefault();
    document.querySelector('.funds-modal').classList.toggle('hidden');

    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  render() {
    return (
      <div className='funds-modal hidden'>
        <div className='close-modal' onClick={this.clickClose}>&times;</div>
        <div className='add-funds-form-div'>
          <form onSubmit={this.handleSubmit} className='deposit-form'>
            <p>Deposit Funds</p>
            <label>From</label>
              <input type="text" value='JPMorgan Chase' disabled/>
            <label htmlFor='add-amount'> Amount</label>
              <input type="text" value={this.state.amount} placeholder='$0.00' onChange={this.handleChange} id='add-amount' required/>
            <button className='review-button'>Confirm</button>
          </form>
        </div>
      </div>
    )
  }
}