/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [products, getProduct] = useState([]);

  useEffect(() => {
    // Fetch the API data
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProduct(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const cards = products.map((product) => (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
      <Card style={{ width: "100%", marginBottom: "20px" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href="#">
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <h1
        className="my-4 text-center fw-bold"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "2.5rem" }}
      >
        Product Dashboard
      </h1>

      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
