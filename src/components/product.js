import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, filterProducts } from "../actions/actionProduct";

class product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    // props.product must macth from the native produccer in index.js

    // new filter when payload is filter out from whole product
    const allproduct = this.props.newfilter.map(data => (
      <div key={data.id}>
        <li>{data.name}</li>
      </div>
    ));
    return (
      <div>
        <h1>DINA REDUX IMPLEMENTATION</h1>
        <select
          // when it click it will filter out the data when the name is changing
          // and redux devtool is gonna pop new type
          onChange={e =>
            // we use produts coz to filter all of the prouct from the payload products
            this.props.filterProducts(this.props.products, e.target.value)
          }
        >
          <option value="">all</option>
          <option value="dina">dina</option>
        </select>
        {allproduct}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  // calling frome redux to knows
  products: state.products.items,
  newfilter: state.products.filter,
});
// if we put in the connect {} here it will become the props of the class
// so we be able to call $this.props.fetchProduct or this.props.filterproducts or what ever
export default connect(mapStateToProps, { fetchProducts, filterProducts })(
  product
);
