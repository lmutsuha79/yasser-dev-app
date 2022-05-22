import NavBar from "../../../components/nav";
import Image from "next/image";
import Footer from "../../../components/footer";
import Link from "next/link"
const Posts = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const post_div = (
    <div className="shadow-sm shadow-main-blue/10 px-3 py-6 hover:shadow-md transition">
      <div>
        {/* img cotainer */}

        <Image
          src="/posts_img/nativ_vs.jpg"
          width="1200"
          height="720"
          alt="post img"
          draggable='false'
        />
      </div>
      <div className="space-y-2">
        {/* text container*/}
        <div className="text-main-gray text-sm font-medium flex justify-between">
          <ul className="flex">
            <li>development,</li>
            <li>web</li>
          </ul>
          <span>july 2 2020</span>
        </div>
        <Link href="/jiji">
          <a className="text-main-blue hover:text-main-blue-hover transition-colors font-semibold text-lg">
            Hybrid vs Native -- here is how you can choose over the other
          </a>
        </Link>
        <p className="text-main-gray text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit id quibusdam odit cupiditate, ullam eum non nulla fugiat
          sequi molestias!
        </p>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="mt-[70px]">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {arr.map((item) => post_div)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
