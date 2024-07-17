import "./Logincss.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebasecredentials";
import { useContext } from "react";
import {GlobalInfo} from "../App"
import { useNavigate, useNavigation } from "react-router";


const auth = getAuth(app);
export function Login() {
  const {getemail}=useContext(GlobalInfo);
  const navigate=useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        alert("login succesfully");
      
        getemail(userCredential.user.email)
        // console.log(userCredential)
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
if(
userCredential.operationType =="signIn"
){navigate("/")}
      })
      .catch((error) => {
        alert(error);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="login-container">
        <h2>Login</h2>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="button" onClick={handlesubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
