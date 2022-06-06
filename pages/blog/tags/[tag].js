import Footer from "../../../components/footer";
import NavBar from "../../../components/nav";
import PostsGrid from "../../../components/posts-grid";
import { getPostsByTag } from "../../api/posts";
const Tag = ({ tagName, posts }) => {
  return (
    <>
      <NavBar />


      <PostsGrid posts={posts} title={tagName} backUrl={"/blog/posts"} />
      <Footer />
    </>
  );
};

export default Tag;
export async function getServerSideProps(context) {
  const tagName = context.query.tag;
  const posts = getPostsByTag(tagName);

  return {
    props: {
      tagName,
      posts,
    },
  };
}
// export async function getSatticPaths(){

// }
// export async function getStaticProps(){

// }
