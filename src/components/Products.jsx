// loder 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api } from "./api";
import { ThreeCircles, Audio } from 'react-loader-spinner'; // ✅ You can choose either

const Products = () => {
  const { firmId } = useParams();
  const [products, setProducts] = useState([]);
  const [firmName, setFirmName] = useState("");
  const [loading, setLoading] = useState(true); // ✅ loader state

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const result = await axios.get(`${api}/products/${firmId}/products`);
        setProducts(result.data.products);
        setFirmName(result.data.RestruantName);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false); // ✅ hide loader after fetch
      }
    };

    if (firmId) handleProduct();
  }, [firmId]);

  return (
    <div className="productBody">
      <h2>{firmName}</h2>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          < ThreeCircles
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="productBox">
            <div className="content">
              <h3>{product.productName}</h3>
              <p>₹{product.price}</p>
              <p id="myp">{product.description}</p>
            </div>
            <div className="product_img">
              <img
                src={`${api}/uploads/${product.image}`}
                alt={product.productName}
              />
              <button
                onClick={() => alert("This Feature Coming Soon")}
                className="btn"
              >
                ADD
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;





// origina code

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { api } from "./api";
// import { useParams } from "react-router-dom";
// const Products = ()=>{
//     const {firmId} = useParams(

//     )
//     const [product, setProduct] = useState([]);
//     const handleProduct = async()=>{
//         try {
            
//             const result = await axios.get(`${api}/products/${firmId}/products`);

//             setProduct(result.data);
//             console.log(result.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// useEffect(()=>{
//     handleProduct();
// },[])
//     return(
//     <div className="productBody">
//       {
//       product.map((item) => (
//         <div key={item._id}>
//           <h3>{item.productName}</h3>
//           <p>₹{item.price}</p>
//         </div>
//       ))}
//     </div>
//     )
// }
// export default Products;





// origina code gpt

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { api } from "./api";
// import { ThreeCircles } from 'react-loader-spinner';
// const Products = () => {
//   const { firmId } = useParams();
//   const [products, setProducts] = useState([]);
//   const [firmName, setFirmName] = useState("");
//   const [loading, setLoading] = useState(true);
// // const [count, setCount] = useState(0);

// // const handleClick = () => {
// // setCount(prev => prev + 1);
// // };
 
//   useEffect(() => {
//   const handleProduct = async () => {
//     try {
//       const result = await axios.get(`${api}/products/${firmId}/products`);
//       console.log("API result:", result.data); // 👈 log entire data
//       setProducts(result.data.products);
//       setFirmName(result.data.RestruantName);
//     } catch (error) {
//       console.log("Error fetching products:", error);
//     }
//   };

//   if (firmId) handleProduct();
// }, [firmId]);

//   return (
//     <div className="productBody">
//       <h2>Hotel {firmName}</h2>
//       {products.length === 0 ? (
//         <p>No products available.</p>
//       ) : (
//         products.map((product) => (
//           <div key={product._id} className="productBox">
//             <div className="content">
//               <h3>{product.productName}</h3>
//               <p>₹{product.price}</p>
//               <p>{product.description}</p>
//             </div>
//             <div className="product_img">
//               <img src={`${api}/uploads/${product.image}`} alt={product.productName}/>
//               <button onClick={()=>alert("This Feature Comming soon")} className="btn">ADD</button>
//               {/* <button  className="btn">{count}ADD</button> */}
//             </div>



//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Products;

