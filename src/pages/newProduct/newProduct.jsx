import React, { Component } from 'react';
import ImagePreview from '../../components/imagePreview/imagePreview';
import FormInput from '../../components/formInput/formInput';
import TextArea from '../../components/textArea/textArea';
import FileInput from '../../components/fileinput/flleInput';
import Button from '../../components/button/button';
import Api from '../../services/Api';
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
      imageUrl: '',
      color: ''
    };
  }

  handleSubmit = async e => {
    const { name, description, color, category, image, price } = this.state;
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append('image', image, image.name);
      fd.append('description', description);
      fd.append('category', category);
      fd.append('price', price);
      fd.append('name', name);
      fd.append('color', color);
      const id = await Api.addProduct(fd);
      console.log(id);
    } catch (error) {
      console.log(error.response);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = e => {
    const current = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.setState({
          imageUrl: reader.result,
          image: current
        });
      },
      false
    );

    reader.readAsDataURL(current);
  };

  render() {
    return (
      <div className="newProduct">
        <div className="image-section">
          <ImagePreview imageUrl={this.state.imageUrl} alt={this.state.name} />
          <FileInput
            type="file"
            name="image"
            handleChange={this.handleFileChange}
          />
        </div>

        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              handleChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Product Name"
            />
            <FormInput
              handleChange={this.handleChange}
              name="price"
              type="number"
              placeholder="Price"
            />
            <div className="flex-items">
              <FormInput
                handleChange={this.handleChange}
                name="color"
                type="text"
                placeholder="Color"
                size="small"
              />
              <FormInput
                handleChange={this.handleChange}
                name="category"
                type="text"
                placeholder="Category"
                size="small"
              />
            </div>
            <TextArea
              handleChange={this.handleChange}
              name="description"
              placeholder="Description"
            />

            <Button type="submit">Add Product</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProduct;
