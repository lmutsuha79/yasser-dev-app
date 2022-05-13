import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const PostShow = ({ colNum,sectionTitle, post }) => {
 
  
  // const {img,tags,title,date,url} = post
  const posts = [1, 2, 3, 4];
  const items = posts.map((item) => {

    return (
      <div key={item}>
        <div className="transition-all px-3 py-6 rounded-lg bg-white shadow-main-blue drop-shadow-sm hover:drop-shadow-lg">
          <div className={styles.imgWrapper}>
            <Image
              src={"/posts_img/img.png"}
              width={1200}
              height={720}
              alt="bla bla"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="flex flex-wrap text-main-gray font-normal text-xs sm:text-sm">
            {/* tags slug */}
            <span>Freelance</span>
            <span>,</span>
            <span>Life style</span>
          </div>
          {/* title */}
          <Link href={"/blog"}>
            <a className="font-bold text-main-blue text-sm sm:text-md block">
              10 interior designe reference and tips ideas for you
            </a>
          </Link>
          <div className="flex justify-between text-main-gray text-xs sm:text-sm font-normal">
            {/* views + date */}
            <div>
              <span>12</span>
              <span> hour ago</span>
            </div>
            <div>
              <span>180</span>
              <span> views</span>
            </div>
          </div>
        </div>
     
      </div>
    );
  });
  const item_class = 'grid grid-cols-'+ (colNum/2) + ' gap-4 lg:grid-cols-' + (colNum)
  // const item_class = `grid grid-cols-${colNum/2} gap-4 lg:grid-cols-${colNum}`
  return (
    <section className="mt-6 space-y-8">
      
        {/* <PostShow colNum={4} sectionTitle={"Most viwed"} /> */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2"></div> */}


      <div className="flex justify-between">
            {/* title of section and link */}
            <h4 className="font-semibold text-lg text-main-blue">{sectionTitle}</h4>
            <Link href={'/blog'}>
                  <a className="text-main-gray font-medium text-base">display all</a>
            </Link>
      </div>
      
      <div className={item_class}>
            {items}  
      </div>
   
    </section>
  );
};

export default PostShow;
