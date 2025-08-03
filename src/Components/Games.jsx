// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Games.css'; // import the custom CSS file

// const games = [
//   {
//     id: 1,
//     name: "Memory Match",
//     image: "/assets/games/memory.jpg",
//     description: "Test your memory skills by matching cards.",
//     path: "/games/memory",
//   },
//   {
//     id: 2,
//     name: "Quiz Master",
//     image: "/assets/games/quiz.jpg",
//     description: "Answer fun trivia and challenge your brain.",
//     path: "/games/quiz",
//   },
//   {
//     id: 3,
//     name: "Puzzle Challenge",
//     image: "/assets/games/puzzle.jpg",
//     description: "Solve exciting puzzles and improve logic.",
//     path: "/games/puzzle",
//   },
// ];

// export default function Games() {
//   const navigate = useNavigate();

//   return (
//     <div className="games-container">
//       <h1 className="games-title">Play & Learn</h1>
//       <div className="games-grid">
//         {games.map((game, index) => (
//             <div
//             className="game-card"
//             key={game.id}
//             style={{ animationDelay: `${index * 0.2}s` }}
//             >
//             <img src={game.image} alt={game.name} className="game-image" />
//             <div className="game-content">
//                 <h2>{game.name}</h2>
//                 <p>{game.description}</p>
//                 <button onClick={() => navigate(game.path)}>Play Now</button>
//             </div>
//             </div>
//         ))}
//         </div>
//     </div>
//   );
// }


// import React, { useRef, useEffect, useState } from "react";
// import "./Games.css";
// import { useNavigate } from "react-router-dom";

// const games = [
//   {
//     id: 1,
//     name: "Art Puzzle",
//     description: "Rebuild famous artworks by solving puzzles.",
//     image: "/images/art-puzzle.jpg",
//     path: "/games/art-puzzle",
//   },
//   {
//     id: 2,
//     name: "Folk Dance Quiz",
//     description: "Test your knowledge of Indian folk dances!",
//     image: "/images/folk-dance.jpg",
//     path: "/games/folk-dance-quiz",
//   },
//   {
//     id: 3,
//     name: "Craft Clicker",
//     description: "Click to collect traditional crafts & points!",
//     image: "/images/craft-clicker.jpg",
//     path: "/games/craft-clicker",
//   },
// ];

// export default function Games() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(1); // center by default

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     const children = Array.from(container.children);
//     const containerCenter = container.offsetWidth / 2;

//     let closestIndex = 0;
//     let minDistance = Infinity;

//     children.forEach((child, index) => {
//       const boxCenter =
//         child.offsetLeft - container.scrollLeft + child.offsetWidth / 2;
//       const distance = Math.abs(boxCenter - containerCenter);
//       if (distance < minDistance) {
//         minDistance = distance;
//         closestIndex = index;
//       }
//     });

//     setActiveIndex(closestIndex);
//   };

//   useEffect(() => {
//     handleScroll(); // highlight the center on load
//   }, []);

//   return (
//     <div className="games-container">
//       <h1 className="games-heading">Play & Learn With Culture 🎮</h1>
//       <div className="games-scroll" ref={scrollRef} onScroll={handleScroll}>
//         {games.map((game, index) => (
//           <div
//             key={game.id}
//             className={`game-card ${index === activeIndex ? "active" : ""}`}
//           >
//             <img src={game.image} alt={game.name} className="game-image" />
//             <div className="game-content">
//               <h2>{game.name}</h2>
//               <p>{game.description}</p>
//               <button onClick={() => navigate(game.path)}>Play Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import "./Games.css";

// export default function Games() {
//   return (
//     <div className="games-container">
//       <h1 className="games-heading">Top Picks for You</h1>

//       {/* Radio buttons to control carousel */}
//       <input type="radio" name="carousel" id="game1" defaultChecked />
//       <input type="radio" name="carousel" id="game2" />
//       <input type="radio" name="carousel" id="game3" />

//       <div className="carousel-wrapper">
//         <div className="carousel">
//           {/* Card 1 */}
//           <label className="card card1" htmlFor="game1">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+1" alt="Game 1" />
//             <h2>Memory Match</h2>
//             <p>Test your memory skills in this exciting card matching challenge!</p>
//             <button onClick={() => window.open("/games/memory", "_blank")}>Play Now</button>
//           </label>

//           {/* Card 2 */}
//           <label className="card card2" htmlFor="game2">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+2" alt="Game 2" />
//             <h2>Guess the Art</h2>
//             <p>Can you guess the traditional Indian art style? Play and find out!</p>
//             <button onClick={() => window.open("/games/guess", "_blank")}>Play Now</button>
//           </label>

//           {/* Card 3 */}
//           <label className="card card3" htmlFor="game3">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+3" alt="Game 3" />
//             <h2>Art Puzzle</h2>
//             <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
//             <button onClick={() => window.open("/games/puzzle", "_blank")}>Play Now</button>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import "./Games.css";

// export default function Games() {
//   return (
//     <div className="games-container">
//       <h1 className="games-heading">Top Picks for You</h1>

//       <div className="carousel-wrapper">
//         {/* Radio Inputs */}
//         <input type="radio" name="carousel" id="game1" defaultChecked />
//         <input type="radio" name="carousel" id="game2" />
//         <input type="radio" name="carousel" id="game3" />

//         <div className="carousel">
//           <label className="card card1" htmlFor="game1">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+1" alt="Game 1" />
//             <h2>Memory Match</h2>
//             <p>Test your memory skills in this exciting card matching challenge!</p>
//             <button onClick={() => window.open("/games/memory", "_blank")}>Play Now</button>
//           </label>

//           <label className="card card2" htmlFor="game2">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+2" alt="Game 2" />
//             <h2>Guess the Art</h2>
//             <p>Can you guess the traditional Indian art style? Play and find out!</p>
//             <button onClick={() => window.open("/games/guess", "_blank")}>Play Now</button>
//           </label>

//           <label className="card card3" htmlFor="game3">
//             <img src="https://via.placeholder.com/300x200.png?text=Game+3" alt="Game 3" />
//             <h2>Art Puzzle</h2>
//             <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
//             <button onClick={() => window.open("/games/puzzle", "_blank")}>Play Now</button>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import "./Games.css";

// export default function Games() {
//   return (
//     <div className="games-container">
//       <h1 className="games-heading">Top Picks for You</h1>

//       <div className="carousel-wrapper1">
//         <div className="carousel-inner1">
//           {/* Radio Inputs */}
//           <input type="radio" name="carousel" id="game1" defaultChecked />
//           <input type="radio" name="carousel" id="game2" />
//           <input type="radio" name="carousel" id="game3" />

//           <div className="carousel1">
//             <label className="card card1" htmlFor="game1">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+1" alt="Game 1" />
//               <h2>Memory Match</h2>
//               <p>Test your memory skills in this exciting card matching challenge!</p>
//               <button onClick={() => window.open("/games/memory", "_blank")}>Play Now</button>
//             </label>

//             <label className="card card2" htmlFor="game2">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+2" alt="Game 2" />
//               <h2>Guess the Art</h2>
//               <p>Can you guess the traditional Indian art style? Play and find out!</p>
//               <button onClick={() => window.open("/games/guess", "_blank")}>Play Now</button>
//             </label>

//             <label className="card card3" htmlFor="game3">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+3" alt="Game 3" />
//               <h2>Art Puzzle</h2>
//               <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
//               <button onClick={() => window.open("/games/puzzle", "_blank")}>Play Now</button>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/components/Games.jsx

// import React from "react";
// import "./Games.css";

// export default function Games() {
//   return (
//     <div className="games2-container">
//       <h1 className="games2-heading">Top Picks for You</h1>

//       <div className="carousel2-wrapper">
//         <div className="carousel2-inner">
//           <input type="radio" name="carousel2" id="game1" defaultChecked />
//           <input type="radio" name="carousel2" id="game2" />
//           <input type="radio" name="carousel2" id="game3" />

//           <div className="carousel2">
//             <label className="card2 card2-1" htmlFor="game1">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+1" alt="Game 1" />
//               <h2>Memory Match</h2>
//               <p>Test your memory skills in this exciting card matching challenge!</p>
//               <button onClick={() => window.open("/games/memory", "_blank")}>Play Now</button>
//             </label>

//             <label className="card2 card2-2" htmlFor="game2">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+2" alt="Game 2" />
//               <h2>Guess the Art</h2>
//               <p>Can you guess the traditional Indian art style? Play and find out!</p>
//               <button onClick={() => window.open("/games/SandL", "_blank")}>Play Now</button>
//             </label>

//             <label className="card2 card2-3" htmlFor="game3">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+3" alt="Game 3" />
//               <h2>Art Puzzle</h2>
//               <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
//               <button onClick={() => window.open("/games/puzzle", "_blank")}>Play Now</button>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/********************************************************************************************************** */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css";

export default function Games() {
  const navigate = useNavigate();

  return (
    <div className="games2-container">
      <h1 className="games2-heading">Play the story of Indian art with us</h1>

      <div className="carousel2-wrapper">
        <div className="carousel2-inner">
          <input type="radio" name="carousel2" id="game1" defaultChecked />
          <input type="radio" name="carousel2" id="game2" />
          <input type="radio" name="carousel2" id="game3" />
          <input type="radio" name="carousel2" id="game4" />

          <div className="carousel2">
            <label className="card2 card2-1" htmlFor="game1">
              <img src="/MemoMatch.jpg" alt="Game 1" />
              <h2>Memory Match</h2>
              <p>Test your memory skills in this exciting card matching challenge!</p>
              <button onClick={() => navigate("/games/memory")}>Play Now</button>
            </label>

            <label className="card2 card2-2" htmlFor="game2">
              <img src="/Snl.jpg" alt="Game 2" />
              <h2>Snake and Ladder</h2>
              <p>May the ladders lift you, and the snakes spare you.</p>
              <button onClick={() => navigate("/games/SandL")}>Play Now</button>
            </label>

            <label className="card2 card2-3" htmlFor="game3">
              <img src="https://www.zwende.com/cdn/shop/products/FDJP63-11-4.jpg?v=1661947154&width=1080 " alt="Game 3" />
              <h2>Art Puzzle</h2>
              <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
              <button onClick={() => navigate("/games/puzzle")}>Play Now</button>
            </label>

              <label className="card2 card2-4" htmlFor="game4">
              <img src="/word.jpg" alt="Game 4" />
              <h2>ShabdKala</h2>
              <p>Twist the Letters, Trace the Legacy.</p>
              <button onClick={() => navigate("/games/quiz")}>Play Now</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Games.css";

// export default function Games() {
//   const navigate = useNavigate();

//   return (
//     <div className="games2-container">
//       <h1 className="games2-heading">Top Picks for You</h1>

//       <div className="carousel2-wrapper">
//         <div className="carousel2-inner">
//           <input type="radio" name="carousel2" id="game1" defaultChecked />
//           <input type="radio" name="carousel2" id="game2" />
//           <input type="radio" name="carousel2" id="game3" />
//           <input type="radio" name="carousel2" id="game4" />

//           <div className="carousel2">
//             <label className="card2 card2-1" htmlFor="game1">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+1" alt="Game 1" />
//               <h2>Memory Match</h2>
//               <p>Test your memory skills in this exciting card matching challenge!</p>
//               <button onClick={() => navigate("/games/memory")}>Play Now</button>
//             </label>

//             <label className="card2 card2-2" htmlFor="game2">
//               <img src="/Snl.jpg" alt="Game 2" />
//               <h2>Snake and Ladder</h2>
//               <p>May the ladders lift you, and the snakes spare you.</p>
//               <button onClick={() => navigate("/games/SandL")}>Play Now</button>
//             </label>

//             <label className="card2 card2-3" htmlFor="game3">
//               <img src="https://www.zwende.com/cdn/shop/products/FDJP63-11-4.jpg?v=1661947154&width=1080" alt="Game 3" />
//               <h2>Art Puzzle</h2>
//               <p>Solve the puzzle pieces and uncover the beautiful artwork.</p>
//               <button onClick={() => navigate("/games/puzzle")}>Play Now</button>
//             </label>

//             <label className="card2 card2-4" htmlFor="game4">
//               <img src="https://via.placeholder.com/300x200.png?text=Game+4" alt="Game 4" />
//               <h2>Quiz Quest</h2>
//               <p>Challenge yourself with fun questions on culture & tradition!</p>
//               <button onClick={() => navigate("/games/quiz")}>Play Now</button>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
