import { useState ,useEffect } from "react";
 import Card from 'react-bootstrap/Card';
 
const Product = ()=>{
const [products, getProduct] = useState([]);
  useEffect(()=>{
    // fetch the api data here
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json() )
    .then(Result=>getProduct(Result))
  },[]);
  const cards = products.map(product=>(
   <div className="col-md-3">
   <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
   </div>      
))
  return (
        <div>
            <h1>Product DashBoard</h1>
            <div className="row">
                {cards}
            </div>
        </div>
    ) 
}
export default Product;