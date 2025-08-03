// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UploadArt.css";

// const UploadArt = () => {
//   const [file, setFile] = useState(null);
//   const [uploadedArts, setUploadedArts] = useState([]);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false); // <-- added

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("art", file);
//     setLoading(true); // <-- start loading
//     setMessage("");   // clear previous messages

//     try {
//       const res = await axios.post("http://localhost:5000/upload", formData);
//       setUploadedArts((prev) => [res.data.imageUrl, ...prev]);
//       setMessage("✅ Upload successful!");
//       setFile(null);
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to upload.");
//     } finally {
//       setLoading(false); // <-- stop loading
//     }
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/images");
//         setUploadedArts(res.data.reverse());
//       } catch (err) {
//         console.error("Error fetching images:", err);
//       }
//     };
//     fetchImages();
//   }, []);

//   return (
//     <div className="upload-container">
//       <h2 className="upload-title">Upload Your Artwork</h2>
//       <p className="upload-description">
//         Showcase your creativity! Upload traditional artwork and share it with the world.
//       </p>

//       <div className="upload-form">
//         <input type="file" onChange={handleFileChange} />
//         <button
//           className="upload-btn"
//           onClick={handleUpload}
//           disabled={loading}
//         >
//           {loading ? "Uploading..." : "Upload"}
//         </button>
//       </div>

//       {message && <p className="upload-message">{message}</p>}
//       <hr></hr>

//       <h3 className="gallery-heading">Art Gallery</h3>
//       <div className="gallery">
//         {uploadedArts.map((url, index) => (
//           <img key={index} src={url} alt={`Art ${index + 1}`} className="gallery-img" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadArt;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UploadArt.css";

// const UploadArt = () => {
//   const [file, setFile] = useState(null);
//   const [uploadedArts, setUploadedArts] = useState([]);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("art", file);
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post("http://localhost:5000/upload", formData);
//       setUploadedArts((prev) => [res.data.imageUrl, ...prev]);
//       setMessage("✅ Upload successful!");
//       setFile(null);
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to upload.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/images");
//         setUploadedArts(res.data.reverse());
//       } catch (err) {
//         console.error("Error fetching images:", err);
//       }
//     };
//     fetchImages();
//   }, []);

//   return (
//     <div className="upload-container">
//       <h2 className="upload-title">Upload Your Artwork</h2>
//       <p className="upload-description">
//         Showcase your creativity! Upload traditional artwork and share it with the world.
//       </p>

//       <div className="upload-form">
//         <input type="file" onChange={handleFileChange} />
//         <button className="upload-btn" onClick={handleUpload} disabled={loading}>
//           {loading ? "Uploading..." : "Upload"}
//         </button>
//       </div>

//       {message && <p className="upload-message">{message}</p>}

//       <hr className="upload-separator" />

//       <h3 className="gallery-heading">Art Gallery</h3>
//       <div className="gallery">
//         {uploadedArts.map((url, index) => (
//           <img key={index} src={url} alt={`Art ${index + 1}`} className="gallery-img" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadArt;
<<<<<<< HEAD
import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import "./UploadArt.css";
import { AppContent } from "../context/AppContext";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadArt.css";
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93

const UploadArt = () => {
  const [file, setFile] = useState(null);
  const [uploadedArts, setUploadedArts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD

    const { userData, backendUrl} =
        useContext(AppContent);
=======
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
<<<<<<< HEAD
      if (!userData) {
    setMessage("Please login to upload artworks.");
    return;
  }
=======
>>>>>>> dad9b96b2aaaefc34e728e6c2eac8a601cda6a93
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("art", file);

    try {
      setLoading(true);
      const res = await axios.post("https://traditional-arts-b.onrender.com/upload", formData);
      setUploadedArts((prev) => [...prev, res.data.imageUrl]);
      setMessage("Upload successful!");
      setFile(null); // reset file
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("Failed to upload image.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch uploaded image URLs
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://traditional-arts-b.onrender.com/images");
        setUploadedArts(res.data.images);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Your Artwork</h2>
      <p className="upload-description">
        Showcase your creativity by uploading traditional artwork to the community gallery.
      </p>

      <div className="upload-form">
        <label htmlFor="fileInput" className="custom-file-label">
          {file ? file.name : "Choose a file"}
        </label>
        <input id="fileInput" type="file" onChange={handleFileChange} />
        <button className="upload-btn" onClick={handleUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {message && <p className="upload-message">{message}</p>}

      <hr className="upload-separator" />

      <h3 className="gallery-heading">Art Gallery</h3>
      {loading && uploadedArts.length === 0 ? (
        <p>Loading gallery...</p>
      ) : uploadedArts.length === 0 ? (
        <p className="empty-gallery">
          No artworks uploaded yet. Be the first to share your masterpiece!
        </p>
      ) : (
        <div className="gallery">
          {uploadedArts.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Art ${index + 1}`}
              className="gallery-img"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadArt;








