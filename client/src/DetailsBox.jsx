import React from 'react';
import details from './DetailsBox.css';

class DetailsBox extends React.Component {
  constructor(props) {
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
    this.hideBorder = this.hideBorder.bind(this);
    this.state = {
      clicked: false,
      button: true,
    };
  }

  showMessage() {
    const { clicked } = this.state;
    this.setState({ clicked: true });
    this.setState({ button: true });
    if (clicked === true) {
      this.setState({ button: false });
    }
  }

  hideBorder() {
    this.setState({ button: false });
  }

  hideMessage() {
    this.setState({ clicked: false });
  }

  render() {
    const { button } = this.state;
    const { clicked } = this.state;
    const style1 = {
      border: button ? '1px solid orange' : '1px solid white',
      boxShadow: button ? '0 0 3px #ff8000' : '',
      float: 'right',
    };
    let message;
    if (clicked) {
      message = (
        <div className={details.message} onClick={this.hideBorder}>
          <p>
            {' '}
            <div className={details.shipping}>
              <b>Get free shipping</b>
              <button type="button" className={details.exitButton1} style={style1} onClick={this.hideMessage}><b>X</b></button>
            </div>
            {' '}
            <br />
            <b>Free 5-8 business-day shipping</b>
            {' '}
            within the U.S. when you order $25 of eligible items sold or fulfilled by Amazon.
            <br />
            <div className={details.moreshipping}>Or get 4-5 business-day shipping on this item for $5.99. (Prices may vary for AK and HI.)</div>
            <a href="google.com">Learn more about free shipping</a>
          </p>
        </div>
      );
    }
    return (
      <div className={details.tooltip}>
        <span className={details.details} onClick={this.showMessage}>Details</span>
        <img className={details.arrow} src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazonarrow.png" alt="drop down arrow" />
        {message}
      </div>
    );
  }
}

export default DetailsBox;
