import React from "react";
import Marquee from "react-fast-marquee";
import { posts } from "../Data/Posts"; // Import posts
import { useNavigate } from "react-router-dom";

const MarqueeNews = () => {
  const navigate = useNavigate();
  const onClickMarquee = () => {
    navigate("/investors/latestupdates")
  }
  return (
    <div className="bg-gray-800 text-white py-2">
      <Marquee speed={50} pauseOnHover={true} gradient={false} gradientWidth={50}>
        {posts.map((post, index) => (
          <span key={index} className="mx-4 text-lg text-white" onClick={onClickMarquee}>
            📰 {post.title} |
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
