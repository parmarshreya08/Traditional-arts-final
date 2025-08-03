// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Offcanvas } from 'react-bootstrap';

// export default function Navbar(props) {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#3E0B2C' }}>
//         <div className="container-fluid">
//           <a className="navbar-brand" style={{ color: '#FF9D2F', fontFamily: 'cursive' }} href="/">{props.title}</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* 🔥 Arts Trigger */}
//               <li className="nav-item mx-3">
//                 <button
//                   className="nav-link btn btn-link d-flex align-items-center fw-bold text-white"
//                   onClick={handleShow}
//                 >
//                   <i className="bi bi-list me-2"></i> Arts
//                 </button>
//               </li>

//               <li className="nav-item mx-3">
//                 <a className="nav-link active fw-bold text-white" href="/">Home</a>
//               </li>
//               <li className="nav-item mx-3">
//                 <a className="nav-link fw-bold text-white" href="/">About Us</a>
//               </li>
//               <li className="nav-item mx-3">
//                 <a className="nav-link fw-bold text-white" href="/helpline">Contact</a>
//               </li>
//               <li className="nav-item mx-3">
//                 <a className="nav-link fw-bold text-white" href="/helpline">Games</a>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white" to="/upload">Upload</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white" to="/artists">Artists</Link>
//               </li>
//               <li className="nav-item dropdown mx-3">
//                 <a
//                   className="nav-link dropdown-toggle fw-bold text-white"
//                   href="#"
//                   id="eventsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Events
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/events/upcoming">Upcoming Events</Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/events/completed">Completed Events</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white" to="/cart">Cart 🛒</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white" to="/wishlist"> Wishlist ❤</Link>
//               </li>
//             </ul>

//             <button
//               className="ms-3"
//               style={{ backgroundColor: "#FF8B1F", color: "#fff", borderColor: "#FF8B1F" }}
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#loginModal"
//             >
//               <i className="bi bi-person-circle me-1"></i> Login
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🟠 Offcanvas placed here to be triggered by Navbar */}
//       <Offcanvas show={showOffcanvas} onHide={handleClose} backdrop="static" placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title style={{ color: 'black' }}>Traditional Arts of India</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <p className="fw-bold" style={{ color: 'black' }}>
//             Explore various traditional arts by category:
//           </p>
//           <ul className="list-unstyled">
//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link to="/arts/paintings" className="text-decoration-none text-light fw-bold" onClick={handleClose}>
//                 Traditional Paintings
//               </Link>
//             </li>
//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link to="/arts/dances" className="text-decoration-none text-light fw-medium" onClick={handleClose}>
//                 Folk Dances
//               </Link>
//             </li>
//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link to="/arts/handicrafts" className="text-decoration-none text-light fw-medium" onClick={handleClose}>
//                 Handicrafts
//               </Link>
//             </li>
//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link to="/arts/gallery" className="text-decoration-none text-light fw-medium" onClick={handleClose}>
//                 Gallery
//               </Link>
//             </li>
//           </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
/*---------------------------------------------------------------------------------------------------*/
// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AppContent } from '../context/AppContext';
// import { toast } from 'react-toastify';
// // import Login from "./LoginRegister";

// export default function Navbar(props) {
//   // const [showModal, setShowModal] = useState(false);
//   const [showArtsDropdown, setShowArtsDropdown] = useState(false);

//   const toggleArtsDropdown = () => setShowArtsDropdown((prev) => !prev);

//   const navigate = useNavigate();
// const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);

// const sendVerificationOtp = async () => {
//   try {
//     axios.defaults.withCredentials = true;
//     const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");
//     if (data.success) {
//       navigate("/email-verify");
//       toast.success(data.message);
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// const logout = async () => {
//   try {
//     axios.defaults.withCredentials = true;
//     const { data } = await axios.post(backendUrl + "/api/auth/logout");
//     if (data.success) {
//       setIsLoggedin(false);
//       setUserData(null);
//       navigate("/");
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };


//   return (
//     <>
//       <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#3E0B2C' }}>
//         <div className="container-fluid">
//           <a className="navbar-brand hover-orange" style={{ color: '#FF9D2F', fontFamily: 'cursive' }} href="/">{props.title}</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//               {/* 🔥 Arts Dropdown */}
//               <li className="nav-item dropdown mx-3">
//                 <span
//                   className="nav-link dropdown-toggle fw-bold text-white hover-orange"
//                   role="button"
//                   onClick={toggleArtsDropdown}
//                   onMouseEnter={() => setShowArtsDropdown(true)}
//                   onMouseLeave={() => setShowArtsDropdown(false)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <i className="bi bi-list me-2"></i> Arts
//                 </span>
//                 <ul
//                   className={`dropdown-menu ${showArtsDropdown ? "show" : ""}`}
//                   onMouseEnter={() => setShowArtsDropdown(true)}
//                   onMouseLeave={() => setShowArtsDropdown(false)}
//                 >
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/arts/paintings">Traditional Paintings</Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/arts/dances">Folk Dances</Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/arts/handicrafts">Handicrafts</Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/arts/gallery">Gallery</Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Other Links */}
//               <li className="nav-item mx-3">
//                 <Link className="nav-link active fw-bold text-white hover-orange" to="/">Home</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/aboutus">About Us</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/contactus">Contact</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/game">Games</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/upload">Upload</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/artists">Artists</Link>
//               </li>
//               <li className="nav-item dropdown mx-3">
//                 <a
//                   className="nav-link dropdown-toggle fw-bold text-white hover-orange"
//                   href="#"
//                   id="eventsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Events
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/events/upcoming">Upcoming Events</Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item hover-orange" to="/events/completed">Completed Events</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/cart">Cart 🛒</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link className="nav-link fw-bold text-white hover-orange" to="/wishlist">Wishlist ❤</Link>
//               </li>
//             </ul>

//             {/* Login Button */}
//             {/* <button
//               className="ms-3"
//               style={{ backgroundColor: "#FF8B1F", color: "#fff", borderColor: "#FF8B1F" }}
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#loginModal"
//             >
//               <i className="bi bi-person-circle me-1"></i> Login
//             </button> */}
//             {userData ? (
//             <div className="dropdown text-white ms-3">
//               <button
//                 className="btn btn-light dropdown-toggle"
//                 type="button"
//                 id="userDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {userData.name?.split(" ")[0] || "User"}
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="userDropdown">
//                 {/* Uncomment if using email verification */}
//                 {/* {!userData.isAccountVerified && (
//                   <li>
//                     <button className="dropdown-item" onClick={sendVerificationOtp}>
//                       Verify Email
//                     </button>
//                   </li>
//                 )} */}
//                 <li>
//                   <button className="dropdown-item" onClick={logout}>
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//                       ) : (
//             <button
//               className="ms-3 btn btn-warning"
//               type="button"
//               onClick={() => navigate("/login")} // 👈 Use page navigation, not modal
//             >
//               <i className="bi bi-person-circle me-1"></i> Login
//             </button>
//           )}
//           </div>
//         </div>
//       </nav>
//       {/* {showModal && <Login onClose={() => setShowModal(false)} />} */}
//     </>
//   );
// }
// //           ) : (
// //             <button
// //               className="ms-3 btn btn-warning"
// //               type="button"
// //               onClick={() => navigate(/login)} // 👈 Use page navigation, not modal
// //             >
// //               <i className="bi bi-person-circle me-1"></i> Login
// //             </button>
// //           )}
// //           </div>
// //         </div>
// //       </nav>
// //       {/* {showModal && <Login onClose={() => setShowModal(false)} />} */}
// //       {/* 🔥 BACKDROP + MODAL only on Home Page */}
// //        {/* {showModal && window.location.pathname === "/" && (
// //       <> */}
// //         {/* Backdrop */}
// //         {/* <div
// //           onClick={() => setShowModal(false)}
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             width: "100vw",
// //             height: "100vh",
// //             backgroundColor: "rgba(0, 0, 0, 0.6)",
// //             zIndex: 1040,
// //           }} */}
// //         /*/>*/

// //         {/* Modal */}
// //         {/* <div style={{ zIndex: 1050 }}>
// //           <Login onClose={() => setShowModal(false)} />
// //         </div> */}
// //     {/* </>
// //       )} */}
// //   </>
// // );
// // }
  

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import Login from "./LoginRegister"; // ✅ import modal

export default function Navbar(props) {
  const [showArtsDropdown, setShowArtsDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ control login modal

  const toggleArtsDropdown = () => setShowArtsDropdown((prev) => !prev);
  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#3E0B2C" }}>
        <div className="container-fluid">
          <a className="navbar-brand hover-orange" style={{ color: "#FF9D2F", fontFamily: "cursive" }} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* 🔥 Arts Dropdown */}
              <li className="nav-item dropdown mx-3">
                 <span
                   role="button"
                   className="nav-link dropdown-toggle fw-bold text-white hover-orange"
                   onClick={toggleArtsDropdown}
                   onMouseEnter={() => setShowArtsDropdown(true)}
                   onMouseLeave={() => setShowArtsDropdown(false)}
                   style={{ cursor: "pointer" }}
                 >
                   <i className="bi bi-list me-2"></i> Arts
                 </span>
                 <ul
                   className={`dropdown-menu ${showArtsDropdown ? "show" : ""}`}
                   onMouseEnter={() => setShowArtsDropdown(true)}
                   onMouseLeave={() => setShowArtsDropdown(false)}
                 >
                   <li>
                     <Link className="dropdown-item hover-orange" to="/arts/paintings">Traditional Paintings</Link>
                   </li>
                   <li>
                     <Link className="dropdown-item hover-orange" to="/arts/dances">Folk Dances</Link>
                   </li>
                   <li>
                     <Link className="dropdown-item hover-orange" to="/arts/handicrafts">Handicrafts</Link>
                  </li>
                   <li>
                     <Link className="dropdown-item hover-orange" to="/arts/gallery">Gallery</Link>
                   </li>
                 </ul>
               </li>

               {/* Other Links */}
               <li className="nav-item mx-3">
                 <Link className="nav-link active fw-bold text-white hover-orange" to="/">Home</Link>
               </li>
               <li className="nav-item mx-3">
                 <Link className="nav-link fw-bold text-white hover-orange" to="/aboutus">About Us</Link>
               </li>
               <li className="nav-item mx-3">
                 <Link className="nav-link fw-bold text-white hover-orange" to="/contactus">Contact</Link>
               </li>
               <li className="nav-item mx-3">
                <Link className="nav-link fw-bold text-white hover-orange" to="/game">Games</Link>              
                 </li>
               <li className="nav-item mx-3">
                 <Link className="nav-link fw-bold text-white hover-orange" to="/upload">Upload</Link>
               </li>
               <li className="nav-item mx-3">
                 <Link className="nav-link fw-bold text-white hover-orange" to="/artists">Artists</Link>
               </li>
               <li className="nav-item dropdown mx-3">
                 <a
                   className="nav-link dropdown-toggle fw-bold text-white hover-orange"
                   href="#"
                   id="eventsDropdown"
                  role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                 >
                   Events
                 </a>
                 <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                   <li>
                     <Link className="dropdown-item hover-orange" to="/events/upcoming">Upcoming Events</Link>
                   </li>
                   <li>
                     <Link className="dropdown-item hover-orange" to="/events/completed">Completed Events</Link>
                   </li>
                 </ul>
               </li>
               <li className="nav-item mx-3">
                 <Link className="nav-link fw-bold text-white hover-orange" to="/cart">Cart 🛒</Link>
               </li>
              {/* Dropdowns and nav links... (unchanged) */}
              <li className="nav-item mx-3">
                <Link className="nav-link fw-bold text-white hover-orange" to="/wishlist">Wishlist ❤</Link>
              </li>
            </ul>

            {/* LOGIN OR USER */}
            {/* {userData ? (
              <div className="dropdown text-white ms-3">
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  {userData.name?.split("")[0] || "User"}
                </button>
                <ul className="dropdown-menu">
                  {/* Optional email verify */} 
                  {/* {!userData.isAccountVerified && (
                    <li>
                      <button className="dropdown-item" onClick={sendVerificationOtp}>
                        Verify Email
                      </button>
                    </li>
                  )}
                  <li>
                    <button className="dropdown-item" onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="ms-3 btn btn-warning"
                type="button"
                onClick={() => setShowModal(true)} // ✅ open modal
              >
                <i className="bi bi-person-circle me-1"></i> Login
              </button>
            )} */} 
            {userData ? (
  <div className="dropdown ms-3" >
    <button style={{backgroundColor:"#FF9D2F", color:"white"}}
      className="btn user-avatar-btn dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <b>{userData.name?.charAt(0).toUpperCase() || "U"}</b>
    </button>
    <ul className="dropdown-menu dropdown-menu-end">
      {!userData.isAccountVerified && (
        <li>
          <button className="dropdown-item" onClick={sendVerificationOtp}>
            Verify Email
          </button>
        </li>
      )}
      <li>
        <button className="dropdown-item" onClick={logout}>Logout</button>
      </li>
    </ul>
  </div>
) : (
  <button
    className="ms-3 btn btn-warning"
    type="button"
    onClick={() => setShowModal(true)}
  >
    <i className="bi bi-person-circle me-1"></i> Login
  </button>
)}

          </div>
        </div>
      </nav>

      {/* ✅ Show modal */}
      {showModal && <Login onClose={() => setShowModal(false)} />}
    </>
  );
}
