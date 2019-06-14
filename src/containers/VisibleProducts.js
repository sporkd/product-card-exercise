import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { products } from "../ducks";
import Products from "../components/Products";

const mapStateToProps = state => ({
  filteredProducts: products.selectors.getVisibleProducts(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(products.actions, dispatch)
});

const VisibleProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default VisibleProducts;
