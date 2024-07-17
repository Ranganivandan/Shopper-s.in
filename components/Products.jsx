import React, { useState, useEffect } from "react";
import "./product.css";
import { Link } from "react-router-dom";
export function Products({func}) {
  const [prod, setProd] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:5501/Api.json")
      .then((response) => response.json())
      .then((data) => setProd(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      {prod.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/Home1/${product.id}`}>
          <img
            src={product.url}
            width="100%"
            height="180px"
            style={{ objectFit: "contain" }}
          /></Link>
          <div className="product-details">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>
              {product.price}
              <span style={{ fontSize: "12px" }}>onwards</span>
            
          
            </p>
             <h5
              style={{
                backgroundColor: "green",
                color: "white",
                width: "4vw",
                height: "2vw",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "50px",
              }}
            >
              {product.rating} &#9733;
            </h5>
          </div>
           
        </div>
      ))}
    </div>
  );
}
