import { connect } from 'react-redux';
import { categoryFilter } from '../ducks';
import CategoryItem from '../components/CategoryItem';

const { setCategoryFilter } = categoryFilter.actions;
const { getCategoryFilter } = categoryFilter.selectors;

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.category.id === getCategoryFilter(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCategory: () => {
    dispatch(setCategoryFilter(ownProps.category.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
