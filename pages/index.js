import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      welcom to index page khelil yasser jiji
      <div className=" flex justify-center py-20">
        <div className="text-center bg-main-blue hover:bg-blue-900 transition w-[100px] h-[40px] grid items-center text-blue-300 font-medium">
          <Link href="./blog">go to blog</Link>
        </div>
      </div>
    </>
  );
}
