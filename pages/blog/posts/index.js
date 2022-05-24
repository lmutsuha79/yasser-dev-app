import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import PostContainer from "../../../components/post-container";
import { getAllPosts } from "../../api/posts";

const Posts = ({posts}) => {
  // console.log(posts)
  // const jiji = Array(...posts);
  
  // console.log('#################  1  ########################')

  posts.forEach(post => {
    console.log(post.date);
  });


  // const posts_new = jiji.sort((a,b) => {
  //   return new Date(b.date).getTime() - new Date(a.date).getTime();
  // });

  // console.log('#################  2 ########################')
  // posts_new.forEach(post => {
  //   console.log(post.date);
  // });
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
