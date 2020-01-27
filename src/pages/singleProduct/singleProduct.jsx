import React, { Component, Fragment } from 'react';
import Image from '../../components/image/image';
import axios from '../../services/Api';
import './singleProduct.styles.scss';

class SingleProduct extends Component {
  constructor() {
    super();

    this.state = {
      userData: null
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    try {
      const response = await axios.getAProduct(id);
      this.setState({ userData: response.data.data });
    } catch (error) {
      console.log(error.response);
    }
  }

  render() {
    const { userData } = this.state;
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
    return <Fragment>{showProduct}</Fragment>;
  }
}

export default SingleProduct;
