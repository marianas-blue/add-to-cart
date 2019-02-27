import React from 'react';
import addToModal from './AddToListModal.css';

class AddToListModal extends React.Component {
  constructor(props) {
    super(props);
    this.addToListModalShow = this.addToListModalShow.bind(this);
    this.addToListModalHide = this.addToListModalHide.bind(this);
    this.hideButtonBorder = this.hideButtonBorder.bind(this);
    this.state = {
      addToListModalShow: false,
      buttonToExit: true,
    };
  }

  addToListModalShow() {
    this.setState({ addToListModalShow: true });
    const { buttonToExit } = this.state;
    if (buttonToExit === false) {
      this.setState({ buttonToExit: true });
    }
  }

  addToListModalHide(event) {
    console.log(event.target);
    if (event.target.className === addToModal.list || event.target.className === addToModal.exitButton) {
      this.setState({ addToListModalShow: false });
    }
  }

  hideButtonBorder() {
    this.setState({ buttonToExit: false });
  }

  render() {
    const { addToListModalShow } = this.state;
    const style = { display: addToListModalShow ? 'block' : 'none' };
    const { buttonToExit } = this.state;
    const style1 = {
      border: buttonToExit ? '1px solid orange' : 'transparent',
      boxShadow: buttonToExit ? '0 0 3px #ff8000' : ''
    };

    return (
      <div className={addToModal.addToList}>
        <div className={addToModal.list} style={style} onClick={this.addToListModalHide} >
          <div className={addToModal.listHeader} onClick={this.hideButtonBorder}>
            <span className={addToModal.listHeaderText}>Add to your list</span>
            <button type="button" value="x" className={addToModal.exitButton} onClick={this.addToListModalHide} style={style1}>x</button>
          </div>
          <div className={addToModal.listContent} onClick={this.hideButtonBorder}>
            <div className={addToModal.listOwner}>
              <span className={addToModal.ownerText}>This list is for</span>
              <select className={addToModal.ownerType}>
                <option>You</option>
                <option>Someone else</option>
              </select>
            </div>
            <div className={addToModal.choose}>
              <span className={addToModal.chooseText}>Choose a list type</span>
              <div className={addToModal.listTypes}>
                <div className={addToModal.shoppingList}>
                  <div className={addToModal.shoppingListInner}>
                    <input type="radio" name="radio" />
                    {' '}
                    <h3 className={addToModal.shoppingListText}>Shopping List</h3>
                    <br />
                    <div className={addToModal.shoppingListText2}>
                      <span>Add items you want to shop for.</span>
                    </div>
                  </div>
                </div>
                <div className={addToModal.wishList}>
                  <div className={addToModal.wishListInner}>
                    <input type="radio" name="radio" />
                    {' '}
                    <h3 className={addToModal.wishListText}>Wish List</h3>
                    <br />
                    <div className={addToModal.wishListText2}>
                      <span>Let people know what gifts you'd like.</span>
                    </div>
                  </div>
                </div>
                <div className={addToModal.ideaList}>
                  <div className={addToModal.ideaListInner}>
                    <input type="radio" name="radio" />
                    {' '}
                    <h3 className={addToModal.ideaListText}>Idea List</h3>
                    <br />
                    <div className={addToModal.ideaListText2}>
                      <span>Make a list for the Amazon community.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={addToModal.listNamesSection}>
              <div className={addToModal.listName}>
                <span className={addToModal.listNameText}>List name</span>
                <input type="text" value="Shopping List" className={addToModal.listNameInput} />
                <input type="checkbox" />
                Keep purchased items on your list
              </div>
              <div className={addToModal.privacy}>
                <span className={addToModal.privacyText}>Privacy</span>
                <br />
                <button type="button" value="Private" className={addToModal.private}>Private</button>
                <button type="button" value="Public" className={addToModal.public}>Public</button>
                <span className={addToModal.personal}>Only you can see this list.</span>
              </div>
            </div>
          </div>
          <div className={addToModal.listFooter} onClick={this.hideButtonBorder}>
            <button type="button" className={addToModal.cancel}>Cancel</button>
            <button type="button" className={addToModal.createList}>Create List</button>
          </div>
        </div>
        <input type="submit" value="Add To List" className={addToModal.addButton} onClick={this.addToListModalShow} />
      </div>
    );
  }
}

export default AddToListModal;
