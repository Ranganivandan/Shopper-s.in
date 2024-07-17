import "./Order.css";
import { useContext, useState } from "react";
import { GlobalInfo } from "../App";
import { db } from "./firebasecredentials";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router";
export function Order({addd}) {
  const navigate = useNavigate();
  const { total, sendmail } = useContext(GlobalInfo);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [add, setAdd] = useState("");
  const [mail, setMail] = useState("");

  const placeorder = async (e) => {
    e.preventDefault();

    if (sendmail!="No user Logged In" ) {
      const d = new Date();




      await addDoc(collection(db, "orders"), {
        Name: name,
        Address: add,
        OrderMail: mail,
        phoneNumber: num,
        Accountmail: sendmail,
        Amountpaid: total,
        Items:addd
      });
  addd.length=0
      setName("");
      setMail("");
      setAdd("");
      setNum("");
      navigate("/");
    } else {
      alert("First login and then place order");
      navigate("/Login");
    }
  };




  return (
    <div className="orderbody">
      <div className="container">
        <h2>Place Your Order</h2>
        <span>Amount to be paid:{total}</span>
        <form onSubmit={placeorder}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" required value={num} onChange={(e) => setNum(e.target.value)} />

          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" rows="4" required value={add} onChange={(e) => setAdd(e.target.value)}></textarea>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={mail} onChange={(e) => setMail(e.target.value)} />

          <button type="submit" style={{ fontSize: "15px", color: "black" }}>Place Order & Pay {total}</button>
        </form>
      </div>
    </div>
  );
}
