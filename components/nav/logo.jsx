import Link from "next/link";

const Logo = () => {
      return (
            <Link href={'/blog'}>
                  <a className="text-main-blue font-semibold text-lg">Yasser Dev Blog</a>
            </Link>
      );
}

export default Logo;