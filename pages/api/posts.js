import path from "path";
import fs from "fs";
import matter from "gray-matter";
// const createEecerpt = (excerpt) => {
//   const SIZE = 10;
//   const lenght = excerpt.length;
//   if(lenght === SIZE) return excerpt;
//   if(lenght > SIZE) return excerpt.slice(0,SIZE);
  
//   return excerpt + "      ".repeat(SIZE - lenght);


// }

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
    // excerpt: data.excerpt ?? "no excerpt",
    excerpt: data.excerpt ?? data.intro ?? "no excerpt",
    tags: (data.tags ?? ["no_tag", "no Tag"]).sort(),
    img: data.img ?? "/posts_img/no_img.jpg",
    url: `/blog/posts/${slug}`,
    intro: data.intro ?? "",

  };
  return {
    content,
    meta,
  };
};

export const getAllPosts = () => {
  const posts = getAllSlugs()
    .map((slug) => {
      const { meta, content } = getPost(slug);
      return {
        content,
        ...meta,
      };
    })
    .sort((a, b) => {
      // the newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
};

export const getRelatedPosts = (meta) => {
  const {tags,url} = meta;
  
  const relatedPosts = getAllPosts().filter((post) => {
    // check if the arry of tags passed contains one of tags in other post tags
    // return the post if one of he's tags similar to the Main post
   
 
    if(url != post.url){
      // to not check the same post
      return  tags.some(tag => post.tags.includes(tag))
    }

   
    
  });
  
  return relatedPosts;
};
