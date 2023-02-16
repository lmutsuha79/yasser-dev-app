import Footer from "../../../components/footer";
import NavBar from "../../../components/nav";
import PostsGrid from "../../../components/posts-grid";
import { getPostsByTag } from "../../api/posts";
const Tag = ({ tagName, posts }) => {
  const footer_for_no_posts = posts.length == 0 ? 'absolute bottom-0 left-0 right-0' : ''
  return (
    <>
      <NavBar />

      

      <PostsGrid posts={posts} title={tagName} backUrl={"/blog/posts"} />
      
      <footer className={footer_for_no_posts}>
        <Footer />
      </footer>
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

