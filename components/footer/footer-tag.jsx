import Link from 'next/link'
import {transitionScale} from './style.module.css'

const FooterTag = ({tagTitle}) => {
      return (
            <div className={transitionScale+' '+'h-fit  bg-nav-border-gray  grid place-content-center rounded-md p-2'}>
                  <Link href={"/blog/tags/"+tagTitle}>
                        <a className='text-main-blue font-medium'>{tagTitle}</a>
                  </Link>
            </div>
      );
}

export default FooterTag;