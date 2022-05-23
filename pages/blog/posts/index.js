import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import PostContainer from "../../../components/post-container";
import { getAllPosts } from "../../api/posts";

const Posts = ({posts}) => {
  console.log(posts);

  return (
    <>
      <NavBar />
      <div className="mt-[70px]">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <PostContainer key={index} title={post.title} exerpt={post.excerpt} url={post.url} date={post.date} img={post.img} tags={post.tags} />
          ))}
        </div>
      </div>
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
