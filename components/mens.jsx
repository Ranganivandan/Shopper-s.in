import "./mens.css";
import { Navbar } from "./Navbar";
import { Nabbotom } from "./Nab-botom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Mens({func}) {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5501/mensapi.json")
      .then((res) => res.json())
      .then((data) => setprod(data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <div>
        <Navbar />
        <Nabbotom />
      </div>
      <div className="product-list">
        {prod.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={"/Mens1" } onClick={()=>{func(product.id)}}>
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
    </div>
  );
}
