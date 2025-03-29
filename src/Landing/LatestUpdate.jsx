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


import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "../Data/Posts"; 
import Solid from "/images/bg2.png";
import { useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const navigate = useNavigate();
  const onClickUpdates = () => {
    navigate("/investors/latestupdates");
  };

  return (
    <div
      className="w-full h-[50vh] flex flex-col justify-center items-center bg-white text-black shadow-lg border border-gray-200 p-6"
      style={{ backgroundImage: `url(${Solid})` }}
    >
      {/* Blinking Blue Header */}
      <motion.h2
        className="text-4xl font-semibold mb-2 text-blue-600"
        animate={{ opacity: [1, 0.4, 1] }} // Smooth blinking effect
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        Latest Updates
      </motion.h2>

      <p className="text-gray-600 mb-6">Stay updated with the latest news and announcements.</p>

      <ul className="space-y-4 text-lg">
        {posts.map((post, index) => (
          <li key={index} className="flex items-center space-x-3">
            <motion.div
              className="text-red-500"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bell size={24} />
            </motion.div>
            <span>{post.title}</span>
          </li>
        ))}
      </ul>

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={onClickUpdates}
      >
        View More
      </button>
    </div>
  );
};

export default LatestUpdates;
