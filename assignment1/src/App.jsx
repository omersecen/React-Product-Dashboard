import React from 'react';
import Product from './components/Product.jsx';

function App() {
  return (
    <main>
      <h1>React Product Dashboard</h1>
      <Product title="Laptop" price={1200} />
    </main>
  );
}

export default App;
