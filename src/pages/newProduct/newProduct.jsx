import React, { Component } from 'react';
import ImagePreview from '../../components/imagePreview/imagePreview';
import FormInput from '../../components/formInput/formInput';
import './newProduct.styles.scss';

class NewProduct extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      price: '',
      category: '',
      image: '',
      color: ''
    };
  }

  handleSubmit = async () => {};

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="newProduct">
        <ImagePreview imageUrl={this.state.image} alt={this.state.name} />
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              handleChange={this.handleChange}
              name="name"
              type="text"
            />
            <FormInput
              handleChange={this.handleChange}
              name="price"
              type="number"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NewProduct;
