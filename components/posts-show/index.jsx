import Image from "next/image";
import Link from "next/link";
import Post from "./post";

const PostShow = ({ colNum, sectionTitle, posts }) => {
  // const {img,tags,title,date,url} = post

  // if you wana changeteh lg changeit in every place lke the post how post comp.. p lg:heigh-[120px]
  const item_class =
    "sm:grid sm:grid-cols-" + colNum / 2 + " gap-4  lg:grid-cols-" + colNum;
  return (
    <section className="mt-6">
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
          <Post key={post.url} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostShow;
