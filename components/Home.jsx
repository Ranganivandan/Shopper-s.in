import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { Nabbotom } from "./Nab-botom";
import { Routes,Route } from "react-router";
import { Home1 } from "./Home1";
import { Login } from "./Login";

export default function Home() {

  <Routes>
  <Route path="/" index element={<Home/>} />
     <Route path="/Home1" index element={<Home1 />} />
     <Route path="/Login" element={<Login/>} />
    </Routes>

  return (


    <div>
      <div>
        <Navbar/>
        <Nabbotom />
      </div>

      <Products/>
    </div>
   
  );
}
