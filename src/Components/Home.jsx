// import React,{ useEffect } from 'react';
// import NewArrivals from './NewArrivals'; // path may vary
// import { motion } from 'framer-motion';

// export default function Home() {
//   useEffect(() => {
//     const carouselElement = document.querySelector('#carouselExample');
//     new window.bootstrap.Carousel(carouselElement, {
//       interval: 3000,
//       ride: 'carousel'
//     });
//   }, []);
//   return (
//       <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5 }}
//   >
//       <div className="container1 my-2" >
//         <div id="carouselExample" className="carousel slide " data-bs-ride="carousel">
//             <div className="carousel-inner">
//                 <div className="carousel-item active" data-bs-interval="3000">
//                   <img src="/Nagesh_Goud.webp" className="d-block w-100 carousel-img" alt="art"/>
//                 </div>
//                 <div className="carousel-item" data-bs-interval="3000">
//                   <img src="/vivek_kumavat.webp" className="d-block w-100 carousel-img" alt="art"/>
//                 </div>
//                 <div className="carousel-item" data-bs-interval="3000">
//                   <img src="/JAGANNATH_PAUL.webp" className="d-block w-100 carousel-img" alt="art"/>
//                 </div>
//             </div>
//           <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//         <div>
//         {/* <div className="content my-4">
//           Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel.<br/> Traditional arts are more than just decoration—they’re a living heritage passed down through generations,<br/> reflecting the soul of a community and its values.<br/><br/>

//           From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique<br/> expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance,<br/> traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
//         </div> */}
//         <div className="content mt-4 mb-5"
//          style={{
//     backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1598421673413-1cccb5830f0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     borderRadius: '12px',
//     padding: '2rem',
//   }}>
//         <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#333" }}>
//           "Art speaks where words are unable to explain." <br />
//           Discover timeless traditional arts — where every stroke tells a story.
//            Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel.<br/> Traditional arts are more than just decoration—they’re a living heritage passed down through generations,<br/> reflecting the soul of a community and its values.<br/><br/>

//           From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique<br/> expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance,<br/> traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
//         </p>
//       </div>
//         <NewArrivals/>
//         </div>
//     </div>
//     </motion.div>
//   )
// }

/*----------------------------------------------------------------------------------------*/
// import React, { useEffect, useState } from 'react';
// import NewArrivals from './NewArrivals'; // path may vary
// import { motion } from 'framer-motion';

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const carouselImages = [
//     {
//       url: "/Nagesh_Goud.webp",
//       title: "Madhubani Art",
//       description: "Intricate patterns from Bihar",
//     },
//     {
//       url: "/vivek_kumavat.webp",
//       title: "Warli Paintings",
//       description: "Ancient tribal expressions",
//     },
//     {
//       url: "/JAGANNATH_PAUL.webp",
//       title: "Kalamkari Textiles",
//       description: "Hand-painted cotton masterpieces",
//     },
//   ];

//   // Auto carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   return (
//     <>
//       <style>{`
//         .hero-carousel-section {
//           position: relative;
//           height: 70vh;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 1rem;
//           border-radius: 20px;
//           box-shadow: 0 20px 60px rgba(0,0,0,0.3);
//         }

//         .carousel-slide {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           opacity: 0;
//           transition: opacity 1s ease-in-out;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           border-radius: 20px;
//         }

//         .carousel-slide.active {
//           opacity: 1;
//         }

//         .carousel-slide::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(45deg, rgba(139,69,19,0.2) 0%, rgba(205,133,63,0.1) 100%);
//           border-radius: 20px;
//         }

//         .hero-overlay {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           text-align: center;
//           color: white;
//           z-index: 3;
//           background: rgba(0,0,0,0.4);
//           padding: 2rem;
//           border-radius: 15px;
//           backdrop-filter: blur(10px);
//         }

//         .hero-title {
//           font-size: 4rem;
//           font-weight: bold;
//           margin-bottom: 1rem;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//           background: linear-gradient(45deg, #FFD700, #FFA500);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-subtitle {
//           font-size: 1.5rem;
//           opacity: 0.9;
//           margin-bottom: 2rem;
//         }

//         .cta-button {
//           background: linear-gradient(45deg, #8B4513, #CD853F);
//           color: white;
//           padding: 15px 30px;
//           border: none;
//           border-radius: 30px;
//           font-size: 1.1rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 25px rgba(139,69,19,0.4);
//         }

//         .carousel-indicators {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           z-index: 4;
//         }

//         .indicator {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.5);
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .indicator.active {
//           background: white;
//           transform: scale(1.2);
//         }

//         .content {
//           background-image: linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1598421673413-1cccb5830f0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80");
//           background-size: cover;
//           background-position: center;
//           border-radius: 12px;
//           padding: 2rem;
//           margin-top: 1.5rem;
//           margin-bottom: 3rem;
//         }

//         @media (max-width: 768px) {
//           .hero-title { 
//             font-size: 2.5rem; 
//           }
//           .hero-subtitle { 
//             font-size: 1.2rem; 
//           }
//           .hero-carousel-section {
//             height: 50vh;
//             margin: 0.5rem;
//           }
//           .hero-overlay {
//             padding: 1rem;
//           }
//         }
//       `}</style>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="container1 my-2">
//           {/* Background Carousel Section */}
//           <div className="hero-carousel-section">
//             {carouselImages.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`carousel-slide ${
//                   index === currentSlide ? "active" : ""
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.url})`,
//                 }}
//               />
//             ))}

//             <div className="hero-overlay">
//               <h1 className="hero-title">Kalakriti</h1>
//               <p className="hero-subtitle">Where Tradition Meets Artistry</p>
//               <button className="cta-button">Explore Collection</button>
//             </div>

//             <div className="carousel-indicators">
//               {carouselImages.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`indicator ${
//                     index === currentSlide ? "active" : ""
//                   }`}
//                   onClick={() => setCurrentSlide(index)}
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="content">
//               <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#333" }}>
//                 "Art speaks where words are unable to explain." <br />
//                 Discover timeless traditional arts — where every stroke tells a story.
//                 Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel.<br/> Traditional arts are more than just decoration—they're a living heritage passed down through generations,<br/> reflecting the soul of a community and its values.<br/><br/>

//                 From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique<br/> expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance,<br/> traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
//               </p>
//             </div>
//             <NewArrivals/>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// }


/*-----------------------------------------------------------------------------------------------------------------*/

// import React, { useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight, Palette, Crown, Heart, Star } from 'lucide-react';

// // Mock NewArrivals component for demonstration
// const NewArrivals = () => (
//   <div className="mt-16">
//     <h2 className="text-4xl font-bold text-center mb-8 text-amber-800">New Arrivals</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {[1, 2, 3].map((item) => (
//         <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//           <div className="h-48 bg-gradient-to-br from-orange-200 to-red-200"></div>
//           <div className="p-4">
//             <h3 className="font-semibold text-lg">Traditional Art {item}</h3>
//             <p className="text-gray-600">Beautiful handcrafted piece</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const carouselImages = [
//     {
//       src: "/Nagesh_Goud.webp",
//       title: "Nagesh Goud Collection",
//       subtitle: "Contemporary Indian Art"
//     },
//     {
//       src: "/vivek_kumavat.webp", 
//       title: "Vivek Kumavat Gallery",
//       subtitle: "Traditional Folk Art"
//     },
//     {
//       src: "/JAGANNATH_PAUL.webp",
//       title: "Jagannath Paul Masterpieces",
//       subtitle: "Classical Indian Paintings"
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   return (
//     <div className={`min-h-screen transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//       {/* Hero Section with Carousel */}
//       <div className="relative h-screen overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
//           <div className="absolute inset-0 opacity-5">
//             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                 <pattern id="paisley" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                   <path d="M25,10 Q45,5 55,25 Q50,45 30,50 Q10,45 5,25 Q10,5 25,10 Z" fill="currentColor" opacity="0.3"/>
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#paisley)"/>
//             </svg>
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative h-full flex items-center justify-center">
//           <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
//             {/* Left Content */}
//             <div className="text-center lg:text-left space-y-6 z-10">
//               <div className="space-y-4">
//                 <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
//                   कलाकृति
//                 </h1>
//                 <h2 className="text-3xl lg:text-4xl font-semibold text-amber-800">
//                   KALAKRITI
//                 </h2>
//                 <p className="text-xl text-gray-700 max-w-lg">
//                   Where Ancient Wisdom Meets Artistic Excellence
//                 </p>
//               </div>
              
//               <div className="flex items-center justify-center lg:justify-start gap-4 text-amber-700">
//                 <div className="flex items-center gap-2">
//                   <Palette className="w-5 h-5" />
//                   <span>Handcrafted</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Crown className="w-5 h-5" />
//                   <span>Authentic</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Heart className="w-5 h-5" />
//                   <span>Heritage</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <p className="text-lg text-gray-600 italic">
//                   "कला वह भाषा है जो शब्दों के बिना भावनाओं को व्यक्त करती है"
//                 </p>
//                 <p className="text-base text-gray-600">
//                   Art is the language that expresses emotions without words
//                 </p>
//               </div>

//               <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
//                 Explore Collection
//               </button>
//             </div>

//             {/* Right Carousel */}
//             <div className="relative">
//               <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//                 {carouselImages.map((image, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-all duration-700 ${
//                       index === currentSlide 
//                         ? 'opacity-100 scale-100' 
//                         : 'opacity-0 scale-110'
//                     }`}
//                   >
//                     <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
//                       <div className="text-center text-orange-800">
//                         <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
//                           <Palette className="w-16 h-16" />
//                         </div>
//                         <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
//                         <p className="text-lg">{image.subtitle}</p>
//                       </div>
//                     </div>
//                     <div className="absolute inset-0 bg-black/10"></div>
//                   </div>
//                 ))}
                
//                 {/* Carousel Controls */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
//                 >
//                   <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-600" />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
//                 >
//                   <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-600" />
//                 </button>

//                 {/* Carousel Indicators */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//                   {carouselImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === currentSlide 
//                           ? 'bg-white scale-125' 
//                           : 'bg-white/50 hover:bg-white/75'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
//               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute top-20 left-10 animate-float">
//           <div className="w-8 h-8 bg-orange-300 rounded-full opacity-30"></div>
//         </div>
//         <div className="absolute top-32 right-20 animate-float delay-500">
//           <div className="w-6 h-6 bg-red-300 rounded-full opacity-30"></div>
//         </div>
//         <div className="absolute bottom-32 left-20 animate-float delay-1000">
//           <div className="w-10 h-10 bg-yellow-300 rounded-full opacity-30"></div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-amber-800 mb-6">
//               Our Heritage
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100">
//                 <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-3">
//                   <Star className="w-6 h-6 text-yellow-500" />
//                   Living Heritage
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel. Traditional arts are more than just decoration—they're a living heritage passed down through generations, reflecting the soul of a community and its values.
//                 </p>
//               </div>
              
//               <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-100">
//                 <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-3">
//                   <Heart className="w-6 h-6 text-red-500" />
//                   Timeless Beauty
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance, traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-200 via-red-200 to-yellow-200 rounded-2xl p-8 h-96 flex items-center justify-center shadow-xl">
//                 <div className="text-center text-amber-800">
//                   <div className="w-24 h-24 mx-auto mb-6 bg-white/30 rounded-full flex items-center justify-center">
//                     <Crown className="w-12 h-12" />
//                   </div>
//                   <h3 className="text-3xl font-bold mb-4">भारतीय कला</h3>
//                   <p className="text-xl">Indian Artistry</p>
//                   <p className="text-lg mt-2 opacity-80">Celebrating Tradition</p>
//                 </div>
//               </div>
              
//               {/* Decorative border */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-orange-300 via-red-300 to-yellow-300 rounded-2xl -z-10 opacity-30"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* New Arrivals Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <NewArrivals />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .delay-500 {
//           animation-delay: 0.5s;
//         }
//         .delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// }

/*----------------------------------------******************/
import React, { useEffect, useState } from 'react';
import './Home.css'; // We'll need to create this CSS file

// Features Slideshow Component
const FeaturesSlideshow = () => {
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);

  const featureImages = [
    {
      url: "https://shop.gaatha.com/image/catalog/1-Category%20images/blog/madhubani-painting.jpg",
      title: "Traditional Paintings",
      subtitle: "Madhubani & Folk Art"
    },
    {
      url: "https://live.staticflickr.com/692/23646454362_25aafccd56_b.jpg",
      title: "Artist Community",
      subtitle: "Connect with Artists"
    },
    {
      url: "https://rollthedice.in/cdn/shop/articles/DALL_E_2024-07-19_21.43.35_-_A_vibrant_cartoon_illustration_of_children_playing_traditional_Indian_board_games_such_as_Chowka_Bara_Navakankari_Aadu_Huli_and_Pagade_in_a_village.webp?v=1721405648",
      title: "Cultural Games",
      subtitle: "Interactive Learning"
    },
    {
      url: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg",
      title: "Art Events",
      subtitle: "Workshops & Exhibitions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureSlide((prev) => (prev + 1) % featureImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const nextFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev + 1) % featureImages.length);
  };

  const prevFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev - 1 + featureImages.length) % featureImages.length);
  };

  return (
    <div className="features-slideshow">
      {featureImages.map((image, index) => (
        <div
          key={index}
          className={`feature-slide ${index === currentFeatureSlide ? 'active' : ''}`}
        >
          <img 
            src={image.url} 
            alt={image.title}
            className="feature-slide-image"
          />
          <div className="feature-slide-overlay"></div>
          <div className="feature-slide-content">
            <h3>{image.title}</h3>
            <p>{image.subtitle}</p>
          </div>
        </div>
      ))}
      
      <button onClick={prevFeatureSlide} className="slideshow-btn slideshow-btn-prev">
        &#8249;
      </button>
      <button onClick={nextFeatureSlide} className="slideshow-btn slideshow-btn-next">
        &#8250;
      </button>

      <div className="slideshow-indicators">
        {featureImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeatureSlide(index)}
            className={`indicator ${index === currentFeatureSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

// Mock NewArrivals component with horizontal scroll
// const NewArrivals = () => {
//   const newArrivalItems = [
    // { id: 1, title: "Madhubani Elephant", artist: "Rajesh Kumar", price: "₹2,500", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" },
    // { id: 2, title: "Warli Village Scene", artist: "Meera Patel", price: "₹1,800", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop" },
    // { id: 3, title: "Tanjore Krishna", artist: "Lakshmi Iyer", price: "₹3,200", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=300&fit=crop" },
    // { id: 4, title: "Kalamkari Tree of Life", artist: "Suresh Reddy", price: "₹2,800", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop" },
    // { id: 5, title: "Pattachitra Ganesha", artist: "Deepak Das", price: "₹2,200", image: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=300&h=300&fit=crop" },
    // { id: 6, title: "Pichwai Cow Painting", artist: "Ravi Sharma", price: "₹4,500", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" },
    // { id: 7, title: "Gond Art Peacock", artist: "Tribal Artist", price: "₹1,500", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop" },
    // { id: 8, title: "Miniature Portrait", artist: "Ashok Jain", price: "₹3,800", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=300&h=300&fit=crop" }
    // Mock NewArrivals component with horizontal scroll
const NewArrivals = () => {
  const newArrivalItems = [
    { id: 1, title: "Kalamkari Painting", image: "https://www.singhanias.in/cdn/shop/articles/b84f85940548d5e2e91afed747321022.jpg?v=1692365051" },
    { id: 2, title: "Warli Art", image: "https://merideewar.com/cdn/shop/articles/cd13e1a8c071a11a7cc844f1b6df2cb1xl.jpg?v=1639113433" },
    { id: 3, title: "Tanjore Krishna", image: "https://greenhouseblr.com/cdn/shop/products/IMG_9735_1445x.jpg?v=1649871681" },
    { id: 4, title: "Kalamkari Tree of Life", image: "https://www.memeraki.com/cdn/shop/files/Tree-of-Life-Kalamkari-painting-by-Harinath841_800x.jpg?v=1725000790" },
    { id: 5, title: "Pattachitra Ganesha", image: "https://img.artpal.com/41476/125-20-7-15-1-19-29m.jpg" },
    { id: 6, title: "Pichwai Cow Painting", image: "https://www.shutterstock.com/image-illustration/pichwai-wallpaper-lobby-temple-walls-600nw-2579244709.jpg" },
    { id: 7, title: "Gond Art Peacock", image: "https://images.bestofbharat.com/2022/08/A-49-48.jpg" },
    { id: 8, title: "Miniature Portrait", image: "https://artnindia.com/cdn/shop/products/img070_957b6eba-f1c0-4a21-8da0-28955a2cec31_1200x1200.jpg?v=1577932322" }
  ];


  return (
    <div className="new-arrivals">
      <div className="new-arrivals-header">
        <h2>New Arrivals</h2>
        <button className="view-all-btn">
          View All <span className="arrow">→</span>
        </button>
      </div>
      
      {/* <div className="new-arrivals-container">
        <div className="new-arrivals-scroll">
          {newArrivalItems.map((item) => (
            <div key={item.id} className="arrival-card">
              <div className="arrival-image">
                <img src={item.image} alt={item.title} />
                <div className="arrival-overlay"></div>
                <div className="heart-icon">♥</div>
              </div>
              <div className="arrival-content">
                <h3>{item.title}</h3>
                <p className="artist-name">by {item.artist}</p>
                <div className="arrival-footer">
                  <span className="price">{item.price}</span>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-fade scroll-fade-left"></div>
        <div className="scroll-fade scroll-fade-right"></div>
      </div> */}
      <div className="new-arrivals-container">
        <div className="new-arrivals-scroll">
          {newArrivalItems.map((item) => (
            <div key={item.id} className="arrival-card">
              <div className="arrival-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="arrival-content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-fade scroll-fade-left"></div>
        <div className="scroll-fade scroll-fade-right"></div>
      </div>

    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "/Nagesh_Goud.webp",
      title: "Madhubani Art",
      description: "Intricate patterns from Bihar",
    },
    {
      url: "/JAGANNATH_PAUL.webp",
      title: "Warli Paintings",
      description: "Ancient tribal expressions",
    },
    {
      url: "/vivek_kumavat.webp",
      title: "Kalamkari Textiles",
      description: "Hand-painted cotton masterpieces",
    },
  ];

  const features = [
    {
      icon: "",
      title: "Traditional Paintings",
      description: "Explore our vast collection of authentic Indian paintings including Madhubani, Warli, Tanjore, and Pichwai art forms.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Artists Page",
      description: "Meet talented artists from across India. Discover their stories, techniques, and browse their exclusive collections.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Cultural Games",
      description: "Engage with Indian culture through interactive games and puzzles based on traditional art forms and mythology.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Upload Your Art",
      description: "Share your own traditional artwork with our community. Get feedback and connect with fellow art enthusiasts.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Cultural Events",
      description: "Stay updated with art exhibitions, workshops, festivals, and cultural events happening across the country.",
      color: "orange-red"
    },
    {
      icon: "",
      title: "Wishlist & Cart",
      description: "Save your favorite artworks and make secure purchases. Build your personal collection of traditional art pieces.",
      color: "orange-red"
    }
  ];

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="home-container">
      <div className="container1">
        {/* Background Carousel Section */}
        <div className="hero-carousel-section">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            />
          ))}

          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Welcome Section */}
        <div className="content">
          <p>
            "Art speaks where words are unable to explain." <br />
            Discover timeless traditional arts — where every stroke tells a story.
            Step into a world where stories are painted by hand, and culture lives through every brushstroke, thread, and chisel.<br/> Traditional arts are more than just decoration—they're a living heritage passed down through generations,<br/> reflecting the soul of a community and its values.<br/><br/>

            From intricate textile weaving and pottery to vibrant folk paintings and wood carvings, each piece is a unique<br/> expression of identity, history, and craftsmanship. Whether inspired by tribal motifs or classical elegance,<br/> traditional arts bring authenticity, warmth, and timeless beauty into modern spaces.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2>Explore Kalakriti</h2>
              <p>Discover the rich world of Indian traditional arts through our comprehensive platform</p>
              <div className="header-divider"></div>
            </div>

            <div className="features-grid">
              {/* Slideshow Column */}
              <div className="features-slideshow-container">
                <FeaturesSlideshow />
              </div>

              {/* Information Column */}
              <div className="features-info">
                {features.map((feature, index) => (
                  <div key={index} className={`feature-card ${feature.color}`}>
                    <div className="feature-card-content">
                      <div className="feature-icon">
                        {feature.icon}
                      </div>
                      <div className="feature-text">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <NewArrivals />
      </div>
    </div>
  );
}