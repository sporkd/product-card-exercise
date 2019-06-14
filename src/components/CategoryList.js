import React from 'react';
import './CategoryList.css';
import CategoryItem from '../containers/Category'

const CategoryList = ({ categories }) => {
  return (
    <div>
      <ul className="Category-list">
        {categories.map(category =>
          <CategoryItem key={category.id} category={category}>
            {category.name}
          </CategoryItem>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
