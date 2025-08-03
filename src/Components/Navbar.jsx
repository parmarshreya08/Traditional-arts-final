// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContent } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedin } =
//     useContext(AppContent);
//   const sendVerificationOtp = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(
//         backendUrl + "/api/auth/send-verify-otp"
//       );
//       if (data.success) {
//         navigate("/email-verify");
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/logout");
//       data.success && setIsLoggedin(false);
//       data.success && setUserData(false);
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   return (
//     <div>
//       <img src="add_logo_img.jpg" alt="Logo" />
//       {userData ? (
//         <div>
//           {userData.name[0].toUpperCase()}
//           <ul>
//             {/* {!userData.isAccountVerified && (
//               <li onClick={sendVerificationOtp}>Verify Email</li>
//             )} */}
//             <li onClick={logout}>Logout</li>
//           </ul>
//         </div>
//       ) : (
//         <button type="button" onClick={() => navigate("/login")}>
//           Login
//         </button>
//       )}
//     </div>
//   );
// };

// export default Navbar;