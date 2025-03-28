// import React from 'react';


// const PostCard = ({ post }) => {
//   const { image, title, description, isReversed } = post;

//   return (
//     <div>
//       <div className="w-full flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm mb-8 p-2">
//         <div className={`w-full md:w-2/5 ${isReversed ? 'md:order-last' : 'md:order-first'}`}>
//           <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
//         </div>
//         <div className="w-full md:w-3/5 p-4">
//           <h2 className="text-2xl font-medium text-sky-400 mb-2">{title}</h2>
//           <p className="text-gray-600">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LatestUpdates1 = () => {
//   const posts = [
//     {
//       id: 1,
//       image: '/images/s3.png',
//       title: '"Together, we turned vision into victory, proving that every drop of effort builds an ocean of success."',
//       description: 'The IPO success meet of Water and Infra Solutions Limited, held at the SMC Capitals Registered Office, was a celebration of teamwork, resilience, and shared dreams. The event marked a significant milestone, uniting stakeholders, employees, and partners who contributed to this remarkable achievement. With heartfelt speeches, tokens of appreciation, and a sense of collective pride, the gathering symbolized not just financial success, but a commitment to innovation, sustainability, and future growth.',
//       isReversed: false
//     },
//     {
//       id: 2,
//       image: '/images/V2.png',
//       title: 'Discussion with team from State Bank Of India Led by Manish Chandra Deputy General Manager Bengaluru along with Ravi Meshram and his team',
//       description: 'We from Water and Infra Solutions Ltd had a meaningful and wonderful discussion with team from State Bank Of India Led by Manish Chandra Deputy General Manager Bengaluru along with Ravi Meshram and his team on 22.01.2025 Regarding Further Growth of our company and possible partnerships with Bank',
//       isReversed: false
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-bold text-gray-800">Company Updates</h1>
//         </div>

//         <div className="space-y-8">
//           {posts.map(post => (
//             <PostCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestUpdates1;



// import React from "react";

// const PostCard = ({ post }) => {
//   const { image, title, description, isReversed } = post;

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm mb-6 sm:mb-8 p-3 sm:p-4">
//       {/* Image Section */}
//       <div className={`w-full md:w-2/5 ${isReversed ? "md:order-last" : "md:order-first"}`}>
//         <img src={image} alt={title} className="w-full h-48 sm:h-64 object-cover rounded-lg" />
//       </div>

//       {/* Text Content */}
//       <div className="w-full md:w-3/5 p-3 sm:p-4">
//         <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-sky-400 mb-2">{title}</h2>
//         <p className="text-gray-600 text-sm sm:text-base">{description}</p>
//       </div>
//     </div>
//   );
// };

// const LatestUpdates1 = () => {
//   const posts = [
//     {
//       id: 1,
//       image: "/images/s3.png",
//       title:
//         '"Together, we turned vision into victory, proving that every drop of effort builds an ocean of success."',
//       description:
//         "The IPO success meet of Water and Infra Solutions Limited, held at the SMC Capitals Registered Office, was a celebration of teamwork, resilience, and shared dreams. The event marked a significant milestone, uniting stakeholders, employees, and partners who contributed to this remarkable achievement. With heartfelt speeches, tokens of appreciation, and a sense of collective pride, the gathering symbolized not just financial success, but a commitment to innovation, sustainability, and future growth.",
//       isReversed: false,
//     },
//     {
//       id: 2,
//       image: "/images/V2.png",
//       title:
//         "Discussion with team from State Bank Of India Led by Manish Chandra Deputy General Manager Bengaluru along with Ravi Meshram and his team",
//       description:
//         "We from Water and Infra Solutions Ltd had a meaningful and wonderful discussion with team from State Bank Of India Led by Manish Chandra Deputy General Manager Bengaluru along with Ravi Meshram and his team on 22.01.2025 Regarding Further Growth of our company and possible partnerships with Bank",
//       isReversed: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-6 sm:space-y-8">
//           {posts.map((post) => (
//             <PostCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestUpdates1;

// import React, { useEffect } from "react";
// import { posts } from "../Data/Posts"; // Import posts from data/posts.js
// import PostCard from "./PostCard"; // Ensure it's correctly referenced


// const LatestUpdates1 = () => {
//   useEffect(() =>{
//     window.scrollTo(0,0)
//   },[]);
//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-6 sm:space-y-8">
//           {posts.map((post) => (
//             <PostCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestUpdates1;

// import React, { useEffect, useState } from "react";
// import { posts } from "../Data/Posts"; // Import posts data
// import PostCard from "./PostCard"; // Ensure it's correctly referenced

// const LatestUpdates1 = () => {
//   const [selectedPost, setSelectedPost] = useState(null); // State to track selected post

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-8 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
//         </div>

//         {/* Posts Section */}
//         <div className="space-y-6 sm:space-y-8">
//           {posts.map((post) => (
//             <div key={post.id} onClick={() => setSelectedPost(post)}>
//               <PostCard post={post} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal (Integrated Inside LatestUpdates1) */}
//       {selectedPost && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//               onClick={() => setSelectedPost(null)}
//             >
//               ✖
//             </button>

//             {/* Image */}
//             {selectedPost.image && (
//               <img
//                 src={selectedPost.image}
//                 alt={selectedPost.title}
//                 className="w-full h-64 object-cover rounded-lg mb-4"
//               />
//             )}

//             {/* Title */}
//             <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>

//             {/* Description */}
//             <p className="text-gray-600">{selectedPost.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LatestUpdates1;

import React, { useEffect, useState } from "react";
import { posts } from "../Data/Posts";
import PostCard from "./PostCard";

const LatestUpdates1 = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Company Updates</h1>
        </div>

        {/* Posts Section */}
        <div className="space-y-6 sm:space-y-8">
          {posts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelectedPost(null)}
            >
              ✖
            </button>

            {/* Image */}
            {selectedPost.image && (
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
              />
            )}

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base">{selectedPost.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestUpdates1;

