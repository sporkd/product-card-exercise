import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categories } from "../ducks";
import CategoryList from "../components/CategoryList";

const mapStateToProps = state => ({
  categories: categories.selectors.getCategories(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(categories.actions, dispatch)
});

const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

export default Categories;
