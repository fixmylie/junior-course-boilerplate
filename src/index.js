/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import './index.css';

const products = data.slice(0, 3);

const App = () => {
  return (
    <div className="container">
      <div className="products">
        <h1 className="title">Список товаров</h1>
        <ul className="list">
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
