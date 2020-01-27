import React, { Component } from 'react';
import ImagePreview from '../../components/imagePreview/imagePreview';
import FormInput from '../../components/formInput/formInput';
import TextArea from '../../components/textArea/textArea';
import FileInput from '../../components/fileinput/flleInput';
import Button from '../../components/button/button';
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

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFileChange = e => {
    const current = e.target.files[0];
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      this.setState({ image: reader.result })
    }, false);

    reader.readAsDataURL(current)
  }

  render() {
    return (
      <div className="newProduct">
        <div className="image-section">
          <ImagePreview imageUrl={this.state.image} alt={this.state.name} />
          <FileInput type="file" name="image" handleChange={this.handleFileChange}/>
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
                name="category"
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

            <Button type='submit'>Add Product</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProduct;
