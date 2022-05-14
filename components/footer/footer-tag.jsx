import Link from 'next/link'
import {transitionScale} from './style.module.css'

const FooterTag = ({tagTitle, tagLink}) => {
      return (
            <div className={transitionScale+' '+'bg-nav-border-gray text-main-blue  grid place-content-center rounded-md p-2'}>
                  <Link href={tagLink}>
                        <a>{tagTitle}</a>
                  </Link>
            </div>
      );
}

export default FooterTag;