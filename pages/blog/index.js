import BlogContent from "../../components/blog-content";
import HeroSection from "../../components/hero-section";
import NavBar from "../../components/nav";
import PostShow from "../../components/posts-show";
import path from "path";
import NewsLetter from "../../components/news-letter";
import Footer from "../../components/footer";
import { getAllPosts, getSlidePosts, getRecentPosts } from "../api/posts";
import { PageSEO } from "../../components/SEO/SEO";

export default function Blog({ mostRecentPosts, slidePosts }) {

  return (
    <>
      <PageSEO title={"the blog"} description={"the index page of yasser mitsuha blog"}/>
      <NavBar />

      <div className="container md:pt-16 space-y-8 lg:space-y-24">
        {/* in container */}
        <HeroSection slidePosts={slidePosts} />

        {/* <PostShow colNum={4} sectionTitle={"Most viwed"} /> */}

        <PostShow
          colNum={2}
          sectionTitle={"Rescent Articles"}
          posts={mostRecentPosts}
        />
        {/* <PostShow
          colNum={4}
          sectionTitle={"Rescent Articles"}
          posts={mostRecentPosts}
        /> */}

        <NewsLetter />
      </div>
      {/* out container */}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const mostRecentPosts = getRecentPosts(allPosts, 12);
  const slidePosts = getSlidePosts(allPosts);
  return {
    props: {
      mostRecentPosts,
      slidePosts,
    },
  };
}
