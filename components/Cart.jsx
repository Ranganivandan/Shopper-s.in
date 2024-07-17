import "./cart.css";
import { Navbar } from "./Navbar";
import { Nabbotom } from "./Nab-botom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { GlobalInfo } from "../App";
export function Cart({ addd, removes, adddd }) {
  const {amount}=useContext(GlobalInfo);



  const navigate=useNavigate()
  const [counts, setCounts] = useState(addd.map(() => 1));
  const [totalAmount, setTotalAmount] = useState(
    addd.reduce((total, product) => total + parseFloat(product.price.replace('₹', '')), 0)
  );

  const handleAdd = (index, price) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
    setTotalAmount(totalAmount + parseFloat(price));
  };

  const handleRemove = (index, product) => {
    const newCounts = [...counts];
    if (newCounts[index] === 1) {
      removes(product.id);
    } else {
      newCounts[index]--;
      setCounts(newCounts);
      setTotalAmount(totalAmount - parseFloat(product.price.replace('₹', '')));
    }
  };


const handleorder=(total)=>{
if(total!=0)
{
  amount(total);
navigate("/Order")


}
else{
  alert("your cart is empty")
}

}




  return (
    <div>
      <div>
        <Navbar />
        <Nabbotom />
      </div>
      <div className="cart">
        <div id="left">
          <div className="addedproduct">
            <h1 style={{ borderBottom: "1px solid black" }}>Checkout Products</h1>
            {addd.map((product, index) => (
              <div className="item" key={index}>
                <img
                  style={{ width: "6rem", height: "7rem", objectFit: "contain" }}
                  src={product.url}
                  alt={product.name}
                />
                <div>
                  <p>{product.name}</p>
                  <span style={{ fontWeight: "bold" }}>{product.price}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                  <p>Quantity: <span>{counts[index]}</span></p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button className="plus" onClick={() => handleAdd(index, product.price.replace('₹', ''))}>+</button>
                    <input type="text" value={counts[index]} style={{ width: "3vw" }} readOnly />
                    <button className="minus" onClick={() => handleRemove(index, product)}>-</button>
                  </div>
                </div>
                <span style={{ cursor: "pointer" }} className="remove" onClick={() => { removes(product.id) }}>REMOVE</span>
              </div>
            ))}
          </div>
          <div className="placeorder">
            <button type="button" style={{ fontSize: "20px", textTransform: "uppercase" }}  onClick={()=>{handleorder(totalAmount)}}>
              Place Order
            </button>
          </div>
        </div>
        <div id="right">
          <div className="pricedetail">
            <h2 style={{ borderBottom: "2px solid black", padding: "2px", textTransform: "uppercase" }}>
              Price Detail
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Price ({addd.length} items):</p>
              <p>₹{addd.reduce((total, product) => total + parseFloat(product.price.replace('₹', '')), 0)}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px dotted black" }}>
              <p>Delivery charges:</p>
              <p style={{ backgroundColor: "rgb(228, 243, 243)", borderRadius: "5px", padding: "5px" }}>Free</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <h2>Total Amount:</h2>
              <p className="totoalamount">₹{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
