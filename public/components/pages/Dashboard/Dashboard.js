import React from 'react';
import { connect } from 'react-redux';

import { Header, Loader, Input, Selector, Button } from '../../common';
import { login, signup, validateToken, createOrg, fetchOrgs, createProduct, fetchProducts } from '../../../actions';


let orgName;
let product = {
    name: null,
    price: null
};
let story = {
    description: null,
    imageLink: null
};
let currentOrg;
let currentProduct;


class _Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);
        if (this.props.user.token) {
            this.props.fetchOrgs();
        }
    }

    orgNameRef = input => orgName = input;
    producttNameRef = input => product.name = input;
    productPriceRef = input => product.price = input;
    storyDescriptionRef = input => story.description = input;
    storyImageLinkRef = input => story.imageLink = input;
    currentOrgRef = input => currentOrg = input;
    currentProductRef = input => currentProduct = input;
    createProduct = () => this.props.createProduct(product.name.value, product.price.value, currentOrg.value);
    createOrg = () => this.props.createOrg(orgName.value);
    
    onOrgChange = () => {
        this.props.fetchProducts(currentOrg.value);
    };
    
    render () {

        if (!this.props.user.isInit ||  !this.props.user.token) {
            setTimeout(() => this.props.history.push('/'), 10);
            return null;
        }

        return (
            <div className="dashboard">
                <Header />
                <div className="add">
                    <div className="company">
                        <h3>Add Company</h3>
                        <Input  placeholder="Name" icon="assets/img/tag.png" refe={this.orgNameRef}  />
                        <Button title="Add" onClick={this.createOrg} />
                    </div>
                    <div className="product">
                        <h3>Add Product to</h3>
                        <Selector onChange={this.onOrgChange} refe={this.currentOrgRef} data={this.props.orgs} def="Select Company" />
                        <Input  placeholder="Product Name" icon="assets/img/product.png" refe={this.producttNameRef}  />
                        <Input  placeholder="Price in ETH" icon="assets/img/money.png" refe={this.productPriceRef}  />
                        <Button title="Add" onClick={this.createProduct} />
                    </div>
                    <div className="story">
                        <h3>Add Story to</h3>
                        <Selector refe={this.currentProductRef} data={this.props.products} def="Select Product" />
                        <Input  placeholder="Description" icon="assets/img/keyboard.png" refe={this.storyDescriptionRef}  />
                        <Input  placeholder="Image Link" icon="assets/img/camera.png" refe={this.storyImageLinkRef}  />
                        <Button title="Add" />
                    </div>
                </div>
                <div className="loader">
                    {
                        this.props.network.isLoading ?
                        <Loader message={this.props.network.message} />
                        : null
                    }
                </div>
                <div>
                    <hr />
                </div>
                <div className="view">
                    <div className="companies">
                        <h3>My Companies</h3>
                        <p>Address</p>
                        <h3>My Products</h3>
                    </div>
                    <div className="qrcode">
                        <h3>Shirt</h3>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ user, orgs, network, products }) => ({ user, orgs, network, products });
const mapDispatchToProps = {
    validateToken,
    createOrg,
    fetchOrgs,
    createProduct,
    fetchProducts
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard);

export { Dashboard };