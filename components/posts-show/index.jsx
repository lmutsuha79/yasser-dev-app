import Image from "next/image";
import Link from "next/link";
import PostContainer from "../post-container";

const PostShow = ({ colNum, sectionTitle, posts }) => {
  // const {img,tags,title,date,url} = post

  // if you wana changeteh lg changeit in every place lke the post how post comp.. p lg:heigh-[120px]
  const item_class =
    "sm:grid sm:grid-cols-" + colNum / 2 + " gap-4  lg:grid-cols-" + colNum;
  return (
    <section className="mt-6">
      {/* just for tailwind to not remove this classes */}
      <div className="hidden sm:grid grid-cols-1 grid-cols-2 grid-cols-4 sm:grid-cols-4 sm:grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 md:grid-cols-1 md:grid-cols-2 md:grid-cols-4 "></div>
      <div className="flex justify-between">
        {/* title of section and link */}
        <h4 className="font-semibold text-lg text-main-blue dark:text-white">
          {sectionTitle}
        </h4>
        <Link href={"/blog/posts"}>
          <a className="text-main-gray font-medium text-base">display all</a>
        </Link>
      </div>
      <div className={item_class}>
        {posts.map((post) => (
          <PostContainer post={post} key={post.url} />
          
        ))}
      </div>
    </section>
  );
};

export default PostShow;
