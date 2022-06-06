import PostContainer from "../post-container";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const PostsGrid = ({ posts, title, backUrl }) => {
  const back_to = backUrl ?? "/blog";
  return (
    <div className="mt-[100px]">
      <header className="container lg:mb-6 flex justify-between">
        <h2 className="flex space-x-2 items-center justify-center ">
          <span className="text-main-blue text-lg font-semibold">{title}</span>
          {/* <span className="text-main-blue text-lg font-semibold">path:</span>
          <span className="text-main-blue text-sm">{" "+router.pathname}</span> */}
          {/* <PostTag title={title} /> */}
        </h2>
        <div>
          <Link href={back_to}>
            <a className="text-main-blue-hover hover:text-main-blue transition-colors font-medium space-x-2 ">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>back to blog</span>
            </a>
          </Link>
        </div>
      </header>
      {posts.length == 0 ? (
        <p className=" text-center text-main-blue">Opps No Result! </p>
      ) : (
        <div className=" container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post, index) => {
            return (
              <PostContainer
                key={index}
                title={post.title}
                exerpt={post.excerpt}
                url={post.url}
                date={post.date}
                img={post.img}
                tags={post.tags}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostsGrid;
