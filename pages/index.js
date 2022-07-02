import Link from "next/link";

import { ThemeContext } from "./_app";
import { useContext } from "react";
import generateRssFeed from "../lib/generateRssFeed";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const theme = useContext(ThemeContext);

  return <>
    <Portfolio/>
  </>;
}

export async function getStaticProps() {
  // ........
  await generateRssFeed(); // calling to generate the feed
  // ........
  return {
    props: {},
  };
}
