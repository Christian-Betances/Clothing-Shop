import React from 'react';
import NavBar from '../components/NavBar';
import './Shop.css';

function Shop() {
  const products = [
    {
      id: 1,
      name: 'Black sweater',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Black Shirt',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    {
      id: 3,
        name: 'Denim Jeans',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1604272490759-7c465473958a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
  ];

  return (
    <div>
        <NavBar />
        <div className="background"></div>
        
      <div className="flex-container flex-wrap">

        {products.map((product) => (
          <div key={product.id} className="square">
            <img src={product.image}/>
            <p>{product.name}</p>
            
            <div className="price">
                <p>{product.price}</p>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
