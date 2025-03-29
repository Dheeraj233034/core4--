// import { Bell } from "lucide-react";
// import { motion } from "framer-motion";
// import { posts } from "../Data/Posts"; 
// import Solid from "/images/bg2.png"
// import { useNavigate } from "react-router-dom";

// const LatestUpdates = () => {
//   const navigate = useNavigate();
//   const onClickUpdates = () => {
//     navigate("/investors/latestupdates")
//   }

//   return (
//     <div  className="w-full h-[50vh] flex flex-col justify-center items-center bg-white text-black shadow-lg border border-gray-200 p-6" style={{ backgroundImage: `url(${Solid})` }}>
//       <h2 className="text-2xl font-semibold mb-2">Latest Updates</h2>
//       <p className="text-gray-600 mb-6">Stay updated with the latest news and announcements.</p>
//       <ul className="space-y-4 text-lg">
//         {posts.map((post, index) => (
//           <li key={index} className="flex items-center space-x-3">
//             <motion.div
//               className="text-red-500"
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <Bell size={24} />
//             </motion.div>
//             <span>{post.title}</span> {/* Extracting only the title */}
//           </li>
//         ))}
//       </ul>
//       <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={onClickUpdates}>
//         View More
//       </button>
//     </div>
//   );
// };

// export default LatestUpdates;


// import { useEffect, useState } from "react";
// import { Bell } from "lucide-react";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { posts } from "../Data/Posts";
// import { useNavigate } from "react-router-dom";

// const LatestUpdates = () => {
//   const navigate = useNavigate();
//   const [headerColor, setHeaderColor] = useState("black");
//   const [visiblePost, setVisiblePost] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false, mirror: true });

//     // Header color changing loop (Only Black & Blue)
//     const colorCycle = ["black", ""];
//     let colorIndex = 0;
//     const colorInterval = setInterval(() => {
//       setHeaderColor(colorCycle[colorIndex]);
//       colorIndex = (colorIndex + 1) % colorCycle.length;
//     }, 2000); // Change header color every 2 seconds

//     // Updates blinking one by one (Slower - Every 2.5 Seconds)
//     const postInterval = setInterval(() => {
//       setVisiblePost((prev) => (prev + 1) % posts.length);
//     }, 3500); // Slow blinking every 2.5 seconds

//     return () => {
//       clearInterval(colorInterval);
//       clearInterval(postInterval);
//     };
//   }, []);

//   const onClickUpdates = () => {
//     navigate("/investors/latestupdates");
//   };

//   return (
//     <div
//       className="w-full min-h-[50vh] flex flex-col justify-center items-center text-black shadow-lg border border-gray-200 p-6 bg-[#81BFDA]
//  text-black
//       sm:p-8 md:p-10 lg:p-12 xl:p-14" // Responsive Padding
//       data-aos="fade-up" // AOS for Whole Component
//     >
//       {/* Header with Changing Colors (Black & Blue) */}
//       <motion.h2
//         className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center"
//         style={{ color: headerColor }}
//         transition={{ duration: 1.5 }}
//       >
//         Latest Updates
//       </motion.h2>

//       <p className="text-black mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-in">
//         Stay updated with the latest news and announcements.
//       </p>

//       <ul className="space-y-4 text-sm sm:text-lg md:text-xl lg:text-xl">
//         {posts.map((post, index) => (
//           <motion.li
//             key={index}
//             className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white"
//             animate={{
//               opacity: visiblePost === index ? [0, 1, 0] : 1,
//             }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           >
//             {/* Bell Icon */}
//             <div className="text-black">
//               <Bell size={20} sm:size={24} md:size={28} lg:size={32} />
//             </div>
//             <span>{post.title}</span>
//           </motion.li>
//         ))}
//       </ul>

//       {/* Button */}
//       <motion.button
//         className="mt-6 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-blue-900 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base md:text-lg lg:text-xl"
//         onClick={onClickUpdates}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         data-aos="zoom-in"
//       >
//         View More
//       </motion.button>
//     </div>
//   );
// };

// export default LatestUpdates;


// bg-gradient-to-r from-blue-400 via-yellow-300 to-blue-400

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { posts } from "../Data/Posts";
import { useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const navigate = useNavigate();
  const [visiblePost, setVisiblePost] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    // Updates blinking effect one by one
    const postInterval = setInterval(() => {
      setVisiblePost((prev) => (prev + 1) % posts.length);
    }, 3500); // Slow blinking effect every 3.5 seconds

    return () => clearInterval(postInterval);
  }, []);

  const onClickUpdates = () => {
    navigate("/investors/latestupdates");
  };

  return (
    <div
      className="w-full min-h-[50vh] flex flex-col justify-center items-center text-black shadow-lg border border-gray-200 p-6 bg-[#81BFDA]
      sm:p-8 md:p-10 lg:p-12 xl:p-14" // Responsive Padding
      data-aos="fade-up" // AOS for Whole Component
    >
      {/* Static Header */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center text-black"
      >
        Latest Updates
      </h2>

      <p className="text-black mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl" data-aos="fade-in">
        Stay updated with the latest news and announcements.
      </p>

      {/* Updates List */}
      <ul className="space-y-4 text-sm sm:text-lg md:text-xl lg:text-xl">
        {posts.map((post, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-white"
            animate={{ opacity: visiblePost === index ? [0, 1, 0] : 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {/* Bell Icon */}
            <div className="text-black">
              <Bell size={24} />
            </div>
            <span>{post.title}</span>
          </motion.li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        className="mt-6 px-4 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base md:text-lg lg:text-xl"
        onClick={onClickUpdates}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-aos="zoom-in"
      >
        View More
      </motion.button>
    </div>
  );
};

export default LatestUpdates;
