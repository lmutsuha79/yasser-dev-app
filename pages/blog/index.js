import BlogContent from "../../components/blog-content";
import HeroSection from "../../components/hero-section";
import NavBar from "../../components/nav";
import path from "path";
// import fs from 'fs'

export default function Blog(props) {
  console.log(props.allPosts)
  return (
    <>
      <NavBar pageTitle={"the blog"} />
      {/* <BlogContent allPosts={props.allPosts}/> */}
    </>
  );
}

export async function getStaticProps() {
  const {promises:fs} = require("fs");
  const matter = require('gray-matter');

  const posts_location = path.join(process.cwd(), "pages", "blog", "posts");
  const post_names = await fs.readdir(posts_location)



      const files = await Promise.all(post_names.map(async slug => {
            const file_path = path.join(posts_location,slug);
            const content =  await fs.readFile(file_path,'utf8');
            const the_matter = matter(content);
            // console.log(the_matter)
            return {
              slug,
              the_matter
            };        
      }));
      console.log(files)
      
  return {
    props: {
      allPosts: 'files',
    },
  };
}
