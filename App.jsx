import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Four0four } from "./components/404";
import { About } from "./components/About";
import { Contact } from "./components/contact";
import { Mens } from "./components/mens";
import { Collection } from "./components/collection";
import { Mens11 } from "./components/mens1";
import { useState } from "react";
import {Home1} from "./components/Home1"
import {Cart} from "./components/Cart"
import {Order} from "./components/Order"
import { createContext } from "react";
export const GlobalInfo=createContext();
export default function App() {
  const [pid, setPid] = useState();
  const func = (id) => {
    setPid(id);
    
  };
console.log(pid)
const [cart,setcart]=useState([]);
const  addcart=(pro)=>{
setcart([...cart,pro])
}

const removed = (id) => {
  const arr = [];
  cart.map((ele)=>{
    if(ele.id !== id) arr.push(ele);
  })
  setcart(arr);

};

const [homeid,sethomeid]=useState();

const producthomeid=(id)=>{
sethomeid(id)
alert(id);
console.log(id);
}

const [mail,setmail]=useState("No user Logged In")
const emailget=(mail)=>{
setmail(mail);
}

const [total,settotal]=useState();
const amount=(price)=>{
  settotal(price);
  // alert(price)
}



  return (
    <GlobalInfo.Provider value={{getemail:emailget,sendmail:mail,amount:amount,total:total,length:cart}} >
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/Home1/:id" index element={<Home1 add={addcart} />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Login" element={<Login   />}/>
        <Route path="/*" element={<Four0four />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Mens" element={<Mens func={func} />}/>
        <Route path="/Collection" element={<Collection />}/>
        <Route path="/Mens1" element={<Mens11 data={pid} add={addcart} />} />
        <Route path="/Cart" element={<Cart addd={cart} removes={removed} adddd={homeid} />} />
        <Route path="/Order" element={<Order  addd={cart}/>} />
      </Routes>
    </BrowserRouter>
    </GlobalInfo.Provider>
  );
}
