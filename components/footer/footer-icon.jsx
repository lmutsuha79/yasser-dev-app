import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import {transitionScale} from './style.module.css'
const FooterIcon = ({icon,link}) => {
      
      return (
            <div>
                  <Link href={link}>
                        <a className={`${transitionScale} h-[30px] w-[30px] rounded-full grid place-content-center bg-nav-border-gray`}>
                              <FontAwesomeIcon className='text-main-blue' icon={icon} />
                        </a>
                  </Link>
                     
            </div>
      );
}

export default FooterIcon;