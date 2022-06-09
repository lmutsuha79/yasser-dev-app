import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderItem from "./slider-item";
const HeroSlider = ({ posts }) => {
  const postsLength = posts.length;
  const [postIndex, setPostIndex] = useState(0);
  const [post, setPost] = useState(posts[postIndex]);

  const parent = useRef(null);
  const prev_child = useRef(null);
  // const [prevPostIndex, setPrevPostIndex] = useState(posts.length - 1)

  function nextPost() {
    setPostIndex((curr) => {
      if (curr + 1 >= postsLength) return 0;
      return ++curr;
    });
  }
  function prevPost() {
    setPostIndex((curr) => {
      if (curr - 1 >= 0) return --curr;
      return postsLength - 1;
    });
  }
  useEffect(() => {
    console.log("change");
  }, [postIndex, posts]);

  const variantsNext = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: {duration: 0.3}
  };
  const variantsPrev = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: {duration: 0.3}
  };
  const [variantsMode, setVariantsMode] = useState(variantsNext)
  return (
    <div
      className="px-6 py-8 md:px-6 md:py-8 lg:p-12
       shadow-xl dark:shadow-md dark:shadow-main-blue-hover/30
      "
    >
      <div
        ref={parent}
        className="relative min-h-[550px] sm:min-h-[350px] h-auto"
      >
        <div className="current_post" key={posts[postIndex]}>
          <AnimatePresence initial={true}>
            <motion.div
              key={posts[postIndex].url}
              // custom={posts[postIndex].url}
              variants={variantsMode}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
            >
              <SliderItem
                post={posts[postIndex]}
                nextPost={nextPost}
                prevPost={prevPost}
                setVariantsMode={setVariantsMode}
                variantsNext={variantsNext}
                variantsPrev={variantsPrev}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
