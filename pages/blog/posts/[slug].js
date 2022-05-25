import { getAllSlugs, getPost } from "../../api/posts";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import NavBar from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "next/image";
import PostTag from "../../../components/posts/post-tag";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";// import 'highlight.js/styles/atom-one-dark.css'
import "highlight.js/styles/github-dark.css";

const SinglePost = ({ mdxSource, meta }) => {
  const data = { name: meta.title };
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper mt-[100px]">
          <h2 className="mb-6 text-xl font-Architects_Daughter text-main-blue font-bold text-center px-[10%]">
            {meta.title}
          </h2>
          <div className="flex justify-center space-x-2 items-center mb-6">
            <div className="flex space-x-1">
              {meta.tags.map((tag) => (
                <PostTag key={tag} title={tag} />
              ))}
            </div>
            <span className="text-main-gray font-medium">{meta.date}</span>
          </div>

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
          <div className="mt-6">
            <MDXRemote {...mdxSource} scope={data} components={{ PostTag }} />
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
  console.log(meta);
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
