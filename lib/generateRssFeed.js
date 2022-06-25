import fs from "fs";
import { Feed } from "feed";
import siteMetadata from "../data/siteMetadata";
// import { getAllPosts } from "./posts";
import { getAllPosts } from "../pages/api/posts";

export default async function generateRssFeed() {
  const posts = getAllPosts();
  const siteURL = process.env.VERCEL_URL;
  const date = new Date();
  const author = {
    name: siteMetadata.author,
    email: siteMetadata.authorEmail,
    link: siteMetadata.authorLink,
  };

  // Creating feed
  const feed = new Feed({
    title: siteMetadata.title,
    description: siteMetadata.description,
    id: process.env.VERCEL_URL,
    link: process.env.VERCEL_URL,
    image: siteMetadata.image,
    favicon: siteMetadata.favicon,
    copyright: `All rights reserved ${date.getFullYear()}, ${siteMetadata.title}`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  // Adding blogs to the rss feed
  posts.forEach((post) => {
        const url = `${siteURL}${post.url}`;
    feed.addItem({
      title: post.title,
      id: 'url',
      link: url,
      description: post.excerpt,
      content: post.excerpt,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  // generating the xml and json for rss
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}