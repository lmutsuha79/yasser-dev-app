import { getAllSlugs, getPost, getRelatedPosts } from "../../api/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "next/image";
import PostShow from "../../../components/posts-show";
import PostTag from "../../../components/posts/post-tag";
import TableContent from "../../../components/posts/table-content";
import Title from "../../../components/posts/section-title";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings"; // import 'highlight.js/styles/atom-one-dark.css'
import "highlight.js/styles/github-dark.css";
import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import PostHeader from "../../../components/posts/post-header";
import MobileTableContents from "../../../components/posts/Mobile-Table-Contents";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import TwitterPost from "../../../components/twitter/twitter-post";
import AboutAuthor from "../../../components/posts/about-author";
// <FontAwesomeIcon icon="fa-light fa-circle-ellipsis" />
const SinglePost = ({ mdxSource, meta, relatedPosts }) => {
  const aside = useRef(null);
  const [mbTableIsOpen,setTableIsOpen] = useState(false);
  const [asideVisibility, setAsideVisibility] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  // useEffect(()=>{
  //   asideVisibility ? aside.current.classList = 'bg-main-blue-hover fixed top-[40vh] p-4 rounded-md right-0' : aside.current.classList = 'hidden'
  // },[asideVisibility])

  const data = { name: meta.title };
  return (
    <>
      <NavBar />
      <div className={"container" + " " + styles.wrapper}>
        <div className="wrapper mt-[100px] ">
          <MobileTableContents activeSection={activeSection}/>
          <PostHeader meta={meta} />
          {/* Post Content */}
          <div className="mt-6 sm:grid sm:grid-cols-3 sm:grid-rows-1 space-y-4 sm:space-x-10">
            <aside ref={aside} className="">
              <div className="hidden sm:block sticky h-max w-full top-[100px] overflow-hidden">
                <TableContent
                  title="Table of contents"
                  active={activeSection}
                />
              </div>
            </aside>

            <article className="sm:col-span-2">
              <MDXRemote
                {...mdxSource}
                scope={data}
                components={{ PostTag, Title }}
              />
            </article>
          </div>

          <TwitterPost id={meta.twitterId} />
          <AboutAuthor />

          {/* related posts */}

          <PostShow
            colNum={4}
            sectionTitle={"Related Posts"}
            posts={relatedPosts}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const paths = getAllSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  const { meta, content } = getPost(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behabior: "wrap" }],
      ],
    },
  });

  return {
    props: {
      mdxSource,
      meta,
      relatedPosts: getRelatedPosts(meta),
    },
  };
}
