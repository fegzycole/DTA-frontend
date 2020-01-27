import React, { Component, Fragment } from 'react';
import Spinner from '../../components/spinner/spinner';
import Modal from '../../components/modal/modal';
import Product from '../../components/product/product';
import axios from '../../services/Api';
import './allProducts.styles.scss';

class AllProducts extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      modal: false
    };
  }

  async componentDidMount() {
    try {
      this.setState({ modal: true })
      const response = await axios.getProducts();
      this.setState({ modal: false })
      this.setState({ products: response.data.data });
    } catch (error) {
      this.setState({ modal: false })
      console.log(error.response);
    }
  }

  showProductPage = id => {
    this.props.history.push(`/${id}/show`);
  };

  render() {
    const { products, modal } = this.state;
    const showProducts = products.length
      ? products.map(product => (
          <Product
            key={product.id}
            imageUrl={product.image}
            title={product.name}
            handleViewClick={() => this.showProductPage(product.id)}
            price={product.price}
          />
        ))
      : null;
    const showModal = modal ? (
      <Modal>
        <Spinner />
      </Modal>
    ) : null;
    return (
      <Fragment>
        {showModal}
        <div className="allProducts">{showProducts}</div>
      </Fragment>
    );
  }
}

export default AllProducts;
