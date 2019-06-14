import React from 'react';
import './App.css';
import Categories from "../containers/Categories";
import VisibleProducts from "../containers/VisibleProducts";

const App = () => (
  <div className="app">
    <div className="App-row">
      <Categories />
    </div>
    <div className="App-row">
      <VisibleProducts />
    </div>
  </div>
);

export default App;
