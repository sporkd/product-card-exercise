import React from 'react'
import classnames from 'classnames'
import './CategoryItem.css';

const CategoryItem = ({ active, children, setCategory }) =>
  (
    <li class="Category-Item">
      <a
        className={classnames({ selected: active })}
        style={{ cursor: 'pointer' }}
        onClick={() => setCategory()}
      >
        {children}
      </a>
    </li>
  )

export default CategoryItem
