import React from "react";
import "./home.css";
import { Link, NavLink } from "react-router-dom";

import { GlobalInfo } from "../App";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";

export function Navbar() {
  const {length}=useContext(GlobalInfo)
const auth = getAuth();
function signout(){
signOut(auth).then(() => {
  alert("signout succesfully")
}).catch((error) => {
  console.log(error)
});
}



 const {sendmail}=useContext(GlobalInfo);
  return (
    <div>
      <div className="navbar">
        <ul className="ullist">
          <li
            style={{
              width: "10vw",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img
              className="logo"
              src="https://play-lh.googleusercontent.com/5o3E4oPmxn_wP8dIF9G09THl1z2jqOPT_zOb5rFrJlQxzilW_AOMlCdTJnFanpTakw"
            ></img>
            <h2 id="logo-name" style={{ marginTop: "18px" }}>
              Shopper's.In
            </h2>
          </li>

          <li
            style={{
              width: "22vw",
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "50px",
             alignItems:"center",
             justifyContent:"center",
            //  height:"30px",
             height:"40px"
            }}
          >
            <input
              className="search"
              type="text"
              placeholder="Search.. Shopper's.In"
              style={{
                width: "20vw",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderColor: "transparent",
                justifyContent:"center",
              // height:"100%",
            margin:"15px"
              }}
            ></input>

            <img
              style={{
                width: "20px",
                height: "25px",
                objectFit: "contain",
marginRight:"10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              src="https://cdn-icons-png.freepik.com/512/10629/10629681.png"
            ></img>
          </li>

          <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {
(sendmail != "No user Logged In") ? (
              <>
                <li>{sendmail}</li>
                <li style={{ cursor: "pointer" }} >
                  <Link style={{listStyle:"none",color:"red",textDecoration:"none"}} onClick={{signout}}>
                  Signout</Link></li>
              </>
            ) :
            <>
             <li>
              <NavLink
                to="/Signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                style={{ textDecoration: "none", color: "black" }}
               
              >
                Login
              </NavLink>
            </li>

            </>



            }
           
            <li className="sidebar">
              <Link to="/Cart">
                <img
                  className="addtocart"
                  src="https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png"
             ></img>
              </Link>
              <span className="count">{length.length}</span>
            </li>
               
           
          </li>
        </ul>
      </div>
    </div>
  );
}
