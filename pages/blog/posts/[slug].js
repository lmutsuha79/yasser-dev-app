import { getAllSlugs, getPost } from "../../api/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "next/image";
import PostTag from "../../../components/posts/post-tag";
import SectionTitle from "../../../components/posts/section-title";
import TableContent from "../../../components/posts/table-content";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings"; // import 'highlight.js/styles/atom-one-dark.css'
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";

const SinglePost = ({ mdxSource, meta }) => {
  const [activeSection,setActiveSection] = useState('Intorduction');
  useEffect(() => {
    setTimeout(() => {
      setActiveSection('#flow')
    },3000)
  },[]);
  const data = { name: meta.title };
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="wrapper mt-[100px]">
          <div className="space-y-2 mb-6">
            {/* top post data info container */}
            <h2 className=" text-xl font-Architects_Daughter text-main-blue font-bold text-center px-[10%]">
              {meta.title}
            </h2>
            <div className="flex justify-center space-x-2 items-center ">
              <div className="flex space-x-1">
                {meta.tags.map((tag) => (
                  <PostTag key={tag} title={tag} />
                ))}
              </div>
              <span className="text-main-gray font-medium">{meta.date}</span>
            </div>
            <p className="font-normal text-base text-main-blue text-center px-3 sm:px-[10%] lg:px-[20%]">
              {meta.intro}
            </p>
          </div>
          {/* Post Hero Img  */}
          <div className="text-center">
            <Image
              src={meta.img}
              width={760}
              height={350}
              alt={meta.title + " img"}
              objectFit="contain"
              draggable="false"
            />
          </div>
          {/* Post Content */}
          <div className="mt-6 grid grid-cols-3 space-x-10">
            <article className="col-span-2">
              <MDXRemote {...mdxSource} scope={data} components={{ PostTag, SectionTitle }} />
            </article>
            <aside className="">
              <TableContent
                contentList={[
                  { title: "Intorduction", link: "#introduction" },
                  { title: "What can you contrivute to  this company?", link: "#what-can-you" },
                  { title: "Tips and Triks", link: "#tips" },
                  { title: "How to get is right", link: "#how-to-get" },
                  { title: "Folow up questions", link: "#flow" },
                  { title: "Conclustion", link: "#conclusion" },

                ]}
                title="Table of contents"
                active={activeSection}
              />
            </aside>
          </div>
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
  const mdxSource = await serialize(
    content,
    {
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behabior: "wrap" }],
        ],
      },
    }
    // { parseFrontmatter: true },
  );

  return {
    props: {
      mdxSource,
      meta,
    },
  };
}
