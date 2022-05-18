import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { ThemeContext } from "./_app";
import { useContext } from "react";

export default function Home() {
  const theme = useContext(ThemeContext);
  
  return (
    <div className="h-screen bg-blue-200 dark:bg-blue-900">
      <div>the theme = {theme}</div>
      <button className="bg-black text-white" onClick={() => {
        // theme[1]();
        theme[1](); // call the function for toggling the theme
      }}>
        toggle
      </button>
      <div className=" flex justify-center py-20">
        <div className="text-center bg-main-blue hover:bg-blue-900 transition w-[100px] h-[40px] grid items-center text-blue-300 font-medium">
          <Link href="./blog">go to blog</Link>
        </div>
      </div>
    </div>
  );
}
