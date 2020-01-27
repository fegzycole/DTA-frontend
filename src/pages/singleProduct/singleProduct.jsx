import React, { Component, Fragment } from 'react';
import Image from '../../components/image/image';
import axios from '../../services/Api';
import Spinner from '../../components/spinner/spinner';
import Modal from '../../components/modal/modal';
import './singleProduct.styles.scss';

class SingleProduct extends Component {
  constructor() {
    super();

    this.state = {
      userData: null,
      modal: false
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      this.setState({ modal: true });
      const response = await axios.getAProduct(id);
      this.setState({ 
        userData: response.data.data,
        modal: false
       });
    } catch (error) {
      this.setState({ modal: false });
      console.log(error.response);
    }
  }

  render() {
    const { userData, modal } = this.state;
    const showModal = modal ? (
      <Modal>
        <Spinner />
      </Modal>
    ) : null;
    const showProduct = userData ? (
      <div className="singleProduct">
        <Image
          imageUrl={userData.image}
          name={userData.name}
          styleName="image"
        />
        <div className="product-description">
          <h2>{userData.name.toUpperCase()}</h2>
          <p>{userData.description}</p>
          <p className="category">Category: {userData.category}</p>
          <span className="color">Color: {userData.color}</span>
          <p className="price">₦{userData.price}</p>
        </div>
      </div>
    ) : null;
    return (
      <Fragment>
        {showModal}
        {showProduct}
      </Fragment>
    );
  }
}

export default SingleProduct;
