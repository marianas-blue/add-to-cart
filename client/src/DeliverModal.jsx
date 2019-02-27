import React from 'react';
import deliverModal from './DeliverModal.css';

class DeliverModal extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = {
      modalShow: false,
    };
  }

  showModal() {
    this.setState({ modalShow: true });
  }

  hideModal(event) {
    if (event.target.className === deliverModal.delivery) {
      this.setState({ modalShow: false });
    }
  }

  render() {
    const { modalShow } = this.state;
    const style = { display: modalShow ? 'block' : 'none' };

    return (
      <div className={deliverModal.deliverTo}>
        <div className={deliverModal.delivery} style={style} onClick={this.hideModal}>
          <div className={deliverModal.deliveryHeader}>
            <span className={deliverModal.chooseLocation}><h3>Choose your location</h3></span>
          </div>
          <div className={deliverModal.deliveryContent}>
            <span>Delivery options and delivery speeds may vary for different locations</span>
            <div className={deliverModal.deliveryContentOrangebox}>
              <span>
                <span className={deliverModal.myName}>
                 christopher tso- chicago
                 {' '}
                - 60632
                </span>  
                <br />
                <div className={deliverModal.address}>
                  <span >Default address</span>
                </div>
              </span>
            </div>
            <span className={deliverModal.addressBook}>Manage address book</span>
            <br />
            <p className={deliverModal.UsZip}>or enter a US zip code</p>
            <input type="text" className={deliverModal.textInput} /> 
            {' '}
            <input type="submit" value="Apply" className={deliverModal.textSubmit} />
            <p className={deliverModal.or}>or</p>
            <select className={deliverModal.options}>
              <option>Ship outside the US</option>
            </select>
          </div>
          <div className={deliverModal.deliveryFooter}>
            <button type="button" className={deliverModal.done}>Done</button>
          </div>
        </div>
        <div className={deliverModal.deliverToZipCode}>
          <div className={deliverModal.locator}>
            <img className={deliverModal.locatorimage} src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/Location.png" alt="locator" />
          </div>
          <div className={deliverModal.zipCodeText}>
            <span className={deliverModal.zipCode} onClick={this.showModal}>
              {' '}
              {'Deliver to Chicago 60632'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliverModal;
