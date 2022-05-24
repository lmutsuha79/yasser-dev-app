import Link from 'next/link'
const PostTag = ({title}) => {
      return (
            <Link href={'/blog/tags/'+ title}>

            <a className="w-fit bg-main-blue hover:bg-main-blue-hover transition-colors text-white font-medium grid place-content-center rounded-xl px-2 py-2 sm:px-4 sm:py-2 ">
                  {title}
            </a>

            </Link>
      );
}

export default PostTag;