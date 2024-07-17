import "./mens.css";
import { Navbar } from "./Navbar";
import { Nabbotom } from "./Nab-botom";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./mens1.css"
export function Home1({add}) {
const {id} = useParams(); 

  const [prod, setprod] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5501/Api.json")
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
      
        {prod.map((product) => (
            (product.id==id)?

<div className="productmain">
<div className="leftdetail">

          <div key={product.id} className="productitem">
            <Link to={"/Home1"}>
            <img
              src={product.url}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            /></Link>
            
<div style={{width:"100%",height:"auto",display:"flex",gap:"20px",marginTop:"5vh"}}>
<button  style={{width:"50%",height:"100%"}}  type="button" onClick={()=>{add(product)}}>Add to Cart</button>
<button  style={{width:"50%",height:"100%"}} type="button">Buy Now</button>
</div>

          </div></div>
          
          <div  className="rightdetail">

<div className="righttopdetail">

<div className="product-top">
   <h5>{product.name}</h5>
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
<div className="rightbottomdetail">
<div className="product-bottom">
<div><h2>Product-detail</h2></div>
<div>

<div id="details" style={{fontSize:"14px"}}>
  <p>Detail:{product.detail}</p>
  <p>Name:{product.Name}</p>
  <p>Fabric:{product.Fabric}</p>
  <p>SleeveLength:{product.SleeveLength}</p>
  <p>Pattern:{product.Pattern}</p>
  <p>NetQuantity:{product.NetQuantity}</p>

</div>

</div>
</div>




</div>



</div>



          </div>
         
    
          
          
          
          
          
          :<></>
        ))}
      
    </div>
  );
}
