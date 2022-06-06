import Link from 'next/link'
import {transitionScale} from './style.module.css'

const FooterTag = ({tagTitle}) => {
      return (
            <div className={transitionScale+' '+'bg-nav-border-gray text-main-blue  grid place-content-center rounded-md p-2'}>
                  <Link href={"/blog/tags/"+tagTitle}>
                        <a>{tagTitle}</a>
                  </Link>
            </div>
      );
}

export default FooterTag;