import React from 'react';
import button from './Buttons.css';
import axios from 'axios';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [],
    };
  }

  componentDidMount() {
    const { quantity } = this.state;
    const urlArray = document.URL.split('/');
    const productID = Number(urlArray[urlArray.length - 1]);
    axios.get(`/api/product/${productID}`)
      .then((res) => {
        for (let i = 1; i < res.data[0].quantity + 1; i += 1) {
          quantity.push(<option>{i}</option>);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { quantity } = this.state;
    const style = { visibility: quantity ? 'visible' : 'hidden' };
    return (
      <div className={button.buttons} style={style}>
        <span className={button.qty}>
          {'Qty:'}
          {' '}
        </span>
        <select id={button.quantity}>
          { quantity }
        </select>
        <div className={button.cart}>
          <button className={button.addToCart} type="button">
            <img className={button.cartimage} src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazoncart3.png" alt="cart" />
            {' Add To Cart'}
          </button>
        </div>
        <div className={button.buyNow}>
          <button className={button.buy} type="button">
            <img className={button.buyimage} src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazonbuynow.png" alt="buynow" />
            {' Buy Now'}
          </button>
        </div>
      </div>
    );
  }
}


export default Buttons;
