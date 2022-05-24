import path from "path";
import fs from "fs";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");
export const getAllSlugs = () => {
  const paths_list = fs.readdirSync(POSTS_PATH);
  const slugs_list = paths_list.map((path) => path.split(".")[0]);
  return slugs_list;
};
export const getPost = (slug) => {
  const post_path = path.join(POSTS_PATH, `${slug}.mdx`);
  const { data, content } = matter(fs.readFileSync(post_path));
  const meta = {
    title: data.title ?? slug,
    date: data.date ?? new Date(),
    excerpt: data.excerpt ?? "no excerpt",
    tags: (data.tags ?? ["no_tag", "no Tag"]).sort(),
    img: data.img ?? "/posts_img/no_img.jpg",
    // url: '/jiji'
    url: data.url
      ? `/blog/posts/${data.url}`
      : `/blog/posts/${data.title.replace(/([^\w\s]|\s+)/g, "-")}`,
  }
  return {
    content,
    meta
  };
};

export const getAllPosts = () => {
  const posts = getAllSlugs()
    .map((slug) => {
      // const post_path = path.join(POSTS_PATH, `${slug}.mdx`);
      const { meta, content } = getPost(slug);
      return {
        content,
        ...meta
      };
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
};
