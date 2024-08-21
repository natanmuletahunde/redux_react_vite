/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; // Import Button correctly

const Product = () => {
  const [products, getProduct] = useState([]);

  useEffect(() => {
    // Fetch the API data
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => getProduct(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const cards = products.map(product => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description.substring(0, 100)}...
          </Card.Text>
          <Button variant="primary" href="#">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </div>
  );
};

export default Product;
