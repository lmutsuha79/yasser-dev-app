import BlogContent from "../../components/blog-content";
import HeroSection from "../../components/hero-section";
import NavBar from "../../components/nav";
import PostShow from "../../components/posts-show";
import path from "path";
import NewsLetter from "../../components/news-letter";
import Head from "next/head";
import Footer from "../../components/footer";



export default function Blog(props) {
  return (
    <div>
      <NavBar />

      <div className="container px-4 md:pt-16 space-y-8 lg:space-y-24">
        {/* in container */}
        <HeroSection />

        <PostShow colNum={4} sectionTitle={"Most viwed"} />

        <PostShow colNum={2} sectionTitle={"Rescent Artciles"} />

        <NewsLetter />
      </div>
      {/* out container */}
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const {promises:fs} = require("fs");
//   const matter = require('gray-matter');

//   const posts_location = path.join(process.cwd(), "pages", "blog", "posts");
//   const post_names = await fs.readdir(posts_location)

//       const files = await Promise.all(post_names.map(async slug => {
//             const file_path = path.join(posts_location,slug);
//             const content =  await fs.readFile(file_path,'utf8');
//             const the_matter = matter(content);
//             // console.log(the_matter)
//             return {
//               slug,
//               the_matter
//             };
//       }));
//       console.log(files)

//   return {
//     props: {
//       allPosts: 'files',
//     },
//   };
// }
