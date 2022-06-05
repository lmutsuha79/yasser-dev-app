import BlogContent from "../../components/blog-content";
import HeroSection from "../../components/hero-section";
import NavBar from "../../components/nav";
import PostShow from "../../components/posts-show";
import path from "path";
import NewsLetter from "../../components/news-letter";
import Head from "next/head";
import Footer from "../../components/footer";
import { getAllPosts } from "../api/posts";



export default function Blog({mostRecentPosts}) {
  return (
    <div>
      <NavBar />

      <div className="container md:pt-16 space-y-8 lg:space-y-24">
        {/* in container */}
        <HeroSection />

        {/* <PostShow colNum={4} sectionTitle={"Most viwed"} /> */}


        <PostShow colNum={4} sectionTitle={"Rescent Articles"} posts={mostRecentPosts} />
        <PostShow colNum={4} sectionTitle={"Rescent Articles"} posts={mostRecentPosts} />

        <NewsLetter />
      </div>
      {/* out container */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const mostRecentPosts = allPosts.slice(0,4);
  return{
    props: {
      mostRecentPosts,

    }
  }
}
