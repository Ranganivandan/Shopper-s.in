import "./Signupcss.css";
import { useState } from "react";
import { app } from "./firebasecredentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebasecredentials";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { GlobalInfo } from "../App";
const auth = getAuth(app);
const d = new Date();
export function Signup() {
    const {getemail}=useContext(GlobalInfo);
  const navigate=useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const handlesignup = async (e) => {
    var usernames = document.getElementById("username").value;
    var emails = document.getElementById("email").value;
    var passwords = document.getElementById("password").value;
    e.preventDefault();
    if (usernames && emails && passwords) {
      console.log(username, email, pass);

      await createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed up

          alert(userCredential.operationType);
          
if(
userCredential.operationType =="signIn"
){
  
getemail(userCredential.user.email)
navigate("/")



}

        })
        .catch((error) => {
          alert(error);
          console.log(error);
          // ..
        });

      await setDoc(doc(db, "users", emails), {
        name: usernames,
        total: 0,
        date: d,
        count: 0,
      });

    } else {
      console.warn("please fill the all fields");
      alert("please fill the all fields");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <button type="button" onClick={handlesignup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
