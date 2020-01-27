import React, { Component } from 'react';
import Product from '../../components/product/product';
import axios from '../../services/Api';
import './allProducts.styles.scss';

class AllProducts extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.getProducts();
      this.setState({ products: response.data.data });
    } catch (error) {
      console.log(error.response);
    }
  }

  showProductPage = (id) => {
    this.props.history.push(`/${id}/show`)
  }

  render() {
    const { products } = this.state;
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
    return <div className="allProducts">{showProducts}</div>;
  }
}

export default AllProducts;
