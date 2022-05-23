import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { time } from "console";

const POSTS_PATH = path.join(process.cwd(), "posts");
export const getAllSlugs = () => {
  const paths_list = fs.readdirSync(POSTS_PATH);
  const slugs_list = paths_list.map((path) => path.split(".")[0]);
  return slugs_list;
};

export const getAllPosts = () => {
  const posts = getAllSlugs().map((slug) => {
    const post_path = path.join(POSTS_PATH,`${slug}.mdx`);
    const {data,content} = matter(fs.readFileSync(post_path));

    return {
          content,
          title: data.title ?? slug,
          date: data.date ?? (new Date()).toString,
          excerpt: data.excerpt ?? 'no excerpt',
          tags: (data.tags ?? []).sort()

    };
  });

  console.log('################################')
  console.log(posts[0])

  return posts;
};
