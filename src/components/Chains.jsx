//chat gpt

import React from "react";
import { useState, useEffect } from "react";
import { api } from './api';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner'; // ✅ import spinner

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ spinner state
  const navigate = useNavigate();

  const vendorDataHandler = async () => {
    try {
      const result = await axios.get(`${api}/vendor/getAll`);
      setVendorData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log("error is", error);
    } finally {
      setLoading(false); // ✅ hide loader after fetch
    }
  };

  useEffect(() => {
    vendorDataHandler();
  }, []);

  return (
    <>
      <h1>Best Food Delivery Restaurants in Ap</h1>

      {/* ✅ Spinner while loading */}
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <ThreeCircles
            height="80"
            width="80"
            color="red"
            ariaLabel="three-circles-loading"
          />
        </div>
      ) : (
        <div className="chainBody">
          {vendorData.map((vendor) => (
            <>
              {vendor.firm.map((item) => (
                <div
                  key={item._id}
                  className="firmBody"
                  onClick={() => navigate(`/products/${item._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="firm_img_name">
                    <img src={`${api}/uploads/${item.image}`} />
                    <div className="offer">{item.offer}% off</div>
                  </div>
                  <div className="firm_region_area">
                    <h3>{item.firmName}</h3>
                    <p id="region_area">{item.region.join(', ')}</p>
                    <p id="region_area">{item.area}📍</p>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Chains;















// original

// import React from "react";
// import { useState, useEffect } from "react";
// import { api } from './api';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { ThreeCircles } from 'react-loader-spinner';

// const Chains = () => {
//   const [vendorData, setVendorData] = useState([]);
//   const[loader, setLoader] = useState(true)
//   const navigate = useNavigate();

//   const vendorDataHandler = async () => {
//     try {
//       const result = await axios.get(`${api}/vendor/getAll`);
//       setVendorData(result.data);
//       console.log(result.data);
//     } catch (error) {
//       console.log("error is", error);
//     }
//     setLoader(false);
//   };

//   useEffect(() => {
//     vendorDataHandler();
//   }, []);

//   return (
//     <>
//       <h1>Top restaurant chains in Chhindwara</h1>
//       <div className="chainBody">
//         {vendorData.map((vendor) => (
//           <>
//             {vendor.firm.map((item) => (
//               <div
//                 key={item._id}
//                 className="firmBody"
//                 onClick={() => navigate(`/products/${item._id}`)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <div className="firm_img_name">
//                   <img src={`${api}/uploads/${item.image}`} />
//                   <div className="offer">{item.offer}% off</div>
//                 </div>
//                 <div className="firm_region_area">
//                   <h3>{item.firmName}✨</h3>
//                   <p>{item.region.join(', ')}</p>
//                   <p>{item.area}📍</p>
//                 </div>
//               </div>
//             ))}
//           </>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Chains;










// working chat gpt  using link

// import React from "react";
// import { useState, useEffect } from "react";
// import { api } from './api';
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const Chains = () => {
//   const [vendorData, setVendorData] = useState([]);

//   const vendorDataHandler = async () => {
//     try {
//       const result = await axios.get(`${api}/vendor/getAll`);
//       setVendorData(result.data);
//       console.log(result.data);
//     } catch (error) {
//       console.log("error is", error);
//     }
//   };

//   useEffect(() => {
//     vendorDataHandler();
//   }, []);

//   return (
//     <>
//       <h1>Top restaurant chains in Chhindwara</h1>
//       <div className="chainBody">
//         {vendorData.map((vendor) => {
//           return (
//             <>
//               {vendor.firm.map((item) => {
//                 return (
//                   <Link to={`/products/${item._id}`} key={item._id}>
//                     <div className="firmBody">
//                       <div className="firm_img_name">
//                         <img src={`${api}/uploads/${item.image}`} />
//                         <div className="offer">{item.offer}% off</div>
//                         {item._id}
//                       </div>
//                       <div className="firm_region_area">
//                         <h3>{item.firmName}✨</h3>
//                         <p>{item.region.join(', ')}</p>
//                         <p>{item.area}📍</p>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Chains;

















// import React from "react";
// import { useState, useEffect } from "react";
// import {api} from './api';
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const Chains = ()=>{

//     const [vendorData, setVendorData] = useState([]);

//     const vendorDataHandler = async () => {
//         try {
//             const result = await axios.get(`${api}/vendor/getAll`);
//             setVendorData(result.data);
//             console.log(result.data)
            
//         } catch (error) {
//             console.log("error is",error)
//         }
//     };
//     useEffect(()=>{
//         vendorDataHandler()
//     },[])


//     return(
//         <>
//         <h1>Top restaurant chains in Chhindwara</h1>
//         <div className="chainBody">
//             {
//                 vendorData.map((vendor)=>{
//                     return(
//                         <>
//                         <Link to={`/products/${vendor._id}`}>
//                              {vendor.firm.map((item)=>{
//                                 return(
//                                     <div className="firmBody">
//                                         <div className="firm_img_name">
//                                             <img src={`${api}/uploads/${item.image}`}/>
//                                             <div className="offer">{item.offer}% off</div>
//                                             {item._id}
//                                         </div>
//                                         <div className="firm_region_area">
//                                             <h3>{item.firmName}✨</h3>
//                                             <p>{item.region.join(', ')}</p>
//                                             <p>{item.area}📍</p>
//                                         </div>
//                                     </div>
//                                 )
//                             })} 
//                         </Link>
//                         </>
//                     )
//                 })
//             }
//         </div>
//         </>
        
//     )
// }
// export default Chains;