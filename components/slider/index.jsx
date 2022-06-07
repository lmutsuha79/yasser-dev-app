import { useEffect, useState } from "react";
import styles from "./style.module.css";
import SliderItem from "./slider-item";
const HeroSlider = ({ posts }) => {
  const [postIndex, setPostIndex] = useState(0);
  const [post, setPost] = useState(posts[postIndex]);
 
  useEffect(() => {
    setPost(posts[postIndex]);
   
  }, [postIndex, posts]);
  return (
    <div
      className="px-6 py-8 md:px-6 md:py-8 lg:p-12
       shadow-xl dark:shadow-md dark:shadow-main-blue-hover/30
      "
    >
      <div className="relative">
        <div className="">
          <SliderItem
            post={post}
            setPostIndex={setPostIndex}
            postLength={posts.length}

          />
        </div>
       
      </div>
    </div>
  );
};

export default HeroSlider;
