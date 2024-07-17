import "./collection.css";
import { Navbar } from "./Navbar";
import { Nabbotom } from "./Nab-botom";
import { useState,useEffect } from "react";
export function Collection() {
const [prodt1,setprodt1]=useState([]);
useEffect(()=>{
  fetch("http://127.0.0.1:5501/collectionapi.json").then((res)=>res.json()).then((data)=>setprodt1(data)).catch((error)=>console.log(error))
})
  return (
    <div>
      <div>
        <Navbar />
        <Nabbotom />
      </div>
      <div
        style={{
          margin: "10px",
          width: "100%",
          height: "auto",
         display:"flex",
         justifyContent:"center",
         flexDirection:"column",
         alignContent:"center"
        }}
      >
        <div className="collectionbanner">
          <img src="https://www.definitelycurry.com/wp-content/uploads/2019/06/IMG_1575.jpg"></img>
        </div>
        <div className="services">
          <div
            style={{
              width: "25%",
              height: "80%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                height="50px"
                width="50px"
                src="https://cdn-icons-png.freepik.com/256/9457/9457466.png?semt=ais_hybrid"
              ></img>
              Free services
            </h2>
          </div>
          <div
            style={{
              width: "25%",
              height: "80%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {" "}
              <img
                height="50px"
                width="50px"
                src="https://png.pngtree.com/png-clipart/20211128/original/pngtree-24-hour-delivery-service-png-png-image_6954332.png"
              ></img>
              24 hrs support
            </h2>
          </div>
          <div
            style={{
              width: "25%",
              height: "80%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {" "}
              <img
                height="50px"
                width="50px"
                src="https://cdn-icons-png.flaticon.com/512/240/240501.png"
              ></img>
              gift for friends
            </h2>
          </div>
        </div>
<div style={{display:"flex",justifyContent:"center"}}>
        <div className="feature">
          <div className="left">
            <h1>Featured Product</h1>
          </div>
          <div className="right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, neque sed sint, repudiandae atque vero maxime incidunt, sapiente nobis magni tempora vel optio nam. Nihil, nesciunt? Odio officiis error nesciunt.</p>
          </div>
        </div>
        </div>



        <div className="allproducts">
<div className="lefts">
  <img src="https://cdn.thewatchpages.com/app/uploads/2023/02/02131822/pp-advert-2.jpg" width="100%" height="100%" style={{padding:"20px",borderRadius:"30px"}} ></img>
</div>
<div className="rights">
 {prodt1.map((prod) => (
        <div key={prod.id} className="prod1">
          <img src={prod.name}/>
          <h5 style={{marginTop:"5px"}}>{prod.nam}</h5>
        </div>
      ))}



</div>
        </div>






      </div>
    </div>
  );
}
