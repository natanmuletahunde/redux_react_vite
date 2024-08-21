import { useState ,useEffect } from "react";
const Product = ()=>{
const [products, getProduct] = useState([]);
  useEffect(()=>{
    // fetch the api data here
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json() )
    .then(Result=>getProduct(Result))
  },[]);
  
  return (
        <div>
            <h1>Product DashBoard</h1>
            {JSON.stringify(products) }
        </div>
    ) 
}
export default Product;