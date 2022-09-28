import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderItem from "./slider-item";

import SliderControler from "./slider-controler";
const HeroSlider = ({ posts }) => {
  const postsLength = posts.length;
  const [postIndex, setPostIndex] = useState(0);
  const [post, setPost] = useState(posts[postIndex]);
  
  const prev_child = useRef(null);
  
  const variantsNext = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };
  const variantsPrev = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: { duration: 0.3 },
  };
  const [variantsMode, setVariantsMode] = useState(variantsNext);
  function nextPost() {
    setPostIndex((curr) => {
      if (curr + 1 >= postsLength) return 0;
      return ++curr;
    });
    setVariantsMode(variantsNext);

    
  }
  function prevPost() {
    setPostIndex((curr) => {
      if (curr - 1 >= 0) return --curr;
      return postsLength - 1;
    });
    setVariantsMode(variantsPrev);

  }
  useEffect(() => {
    console.log("change");
  }, [postIndex, posts]);

  return (
    <div
      className="px-6 py-8 md:px-6 md:py-8 lg:p-12
       shadow-xl w-[min(800px,100%)] rounded-md
       
      "
    >
      <div className="relative ">
        <div className="current_post" key={posts[postIndex]}>
            <div
             
            >
              <SliderItem

                post={posts[postIndex]}
                variantsMode={variantsMode}
              />
            </div>
        </div>
      </div>
      <div className="">
        <SliderControler nextPost={nextPost} prevPost={prevPost} />
      </div>
    </div>
  );
};

export default HeroSlider;
