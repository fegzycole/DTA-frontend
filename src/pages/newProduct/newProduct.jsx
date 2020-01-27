import React, { Component, Fragment } from 'react';
import ImagePreview from '../../components/imagePreview/imagePreview';
import FormInput from '../../components/formInput/formInput';
import TextArea from '../../components/textArea/textArea';
import FileInput from '../../components/fileinput/flleInput';
import Button from '../../components/button/button';
import Spinner from '../../components/spinner/spinner';
import Modal from '../../components/modal/modal';
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
      color: '',
      modal: false
    };
  }

  addFormData = fd => {
    const { name, description, color, category, image, price } = this.state;

    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('description', description);
    fd.append('category', category);
    fd.append('price', price);
    fd.append('name', name);
    fd.append('color', color);

    return fd;
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      this.setState({ modal: true, errors: [] });

      const fd = new FormData();
      this.addFormData(fd);
      const response = await Api.addProduct(fd);

      this.setState({ modal: false });

      this.props.history.push(`/${response.data.data}/show`);
    } catch (err) {
      this.setState({ modal: false });
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  toggleModal = () => this.setState({ modal: true });

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
    const { modal } = this.state;
    const showModal = modal ? (
      <Modal>
        <Spinner />
      </Modal>
    ) : null;

    return (
      <Fragment>
        {showModal}
        <div className="newProduct">
          <div className="image-section">
            <ImagePreview
              imageUrl={this.state.imageUrl}
              alt={this.state.name}
            />
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
      </Fragment>
    );
  }
}

export default NewProduct;
