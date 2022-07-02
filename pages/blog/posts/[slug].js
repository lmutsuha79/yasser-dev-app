import { useRouter } from "next/router";
import { UseWindowWidth } from "../../../util/UseWindowWidth";
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
import rehypeAutolinkHeadings from "rehype-autolink-headings"; 
// import 'highlight.js/styles/atom-one-dark.css'
import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/nord.css"
import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import PostHeader from "../../../components/posts/post-header";
import MobileTableContents from "../../../components/posts/Mobile-Table-Contents";




import AboutAuthor from "../../../components/posts/about-author";

import { BlogSEO } from "../../../components/SEO/SEO";
const SinglePost = ({ mdxSource, meta, relatedPosts }) => {
  const aside = useRef(null);
  // const [mbTableIsOpen, setTableIsOpen] = useState(false);
  // const [asideVisibility, setAsideVisibility] = useState(false);
  // const [activeSection, setActiveSection] = useState("introduction");

  const router = useRouter();
  // const [pathName,setPathName] = useState(router.asPath);
  const data = { name: meta.title };
  const windowWidth = UseWindowWidth();

  return (
    <>
      <BlogSEO
        // authorDetails={}
        title={meta.title}
        summary={meta.excerpt}
        images={meta.img}
        // canonicalUrl={""}
        publishedAt={meta.date}
        modifiedAt={meta.date}
      />
      <NavBar />
      {windowWidth < 1024 && (
        <MobileTableContents
          tableTitle={"TABLE OF CONTENTS"}
          pathName={router.asPath}
          startHidden={"lg"}
        />
      )}
      <div className={"container" + " " + styles.wrapper}>
        <div className="wrapper mt-[100px] ">

          <PostHeader meta={meta} />

          {/* Post Content */}
          <div className="max-w-[1100px] mx-auto mt-6 flex flex-row-reverse items-start justify-center">
            {/* aside */}
            <aside
              ref={aside}
              className="hidden lg:block shrink-[1000] basis-[250px] ml-auto sticky top-[100px] right-0 h-fit mb-4"
            >
              <div>
                {windowWidth >= 1024 && (
                  <TableContent
                    tableTitle={"TABLE OF CONTENTS"}
                    pathName={router.asPath}
                  />
                )}
              </div>
            </aside>

            <article
              id="main_article"
              className="max-w-[min(100%,668px)] sm:col-span-2"
            >
              <MDXRemote
                {...mdxSource}
                scope={data}
                components={{ PostTag, Title }}
              />
            </article>
          </div>

          {/* <TwitterPost id={meta.twitterId} /> */}
          <div className="mt-4">
            <AboutAuthor />
          </div>

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
  // content: string;
  //   meta: {
  //       title: any;
  //       date: any;
  //       excerpt: any;
  //       tags: any;
  //       img: any;
  //       url: string;
  //       intro: any;
  //       twitterId: any;
  //       InSlide: any
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
