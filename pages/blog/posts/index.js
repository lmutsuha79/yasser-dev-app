import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import PostsGrid from "../../../components/posts-grid";
import { getAllPosts } from "../../api/posts";
const Posts = ({ posts }) => {
  return (
    <>
      <NavBar />
        <PostsGrid title={'all posts'} posts={posts} backUrl='/blog'/>
      <Footer />
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
