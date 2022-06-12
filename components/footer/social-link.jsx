import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {transitionScale} from './style.module.css'
const SocialLink = ({icon,link}) => {
      
      return (
            <div>
                        <a href={link} target='__blanck' className={`${transitionScale} h-[30px] w-[30px] rounded-full grid place-content-center bg-nav-border-gray`}>
                              <FontAwesomeIcon className='text-main-blue' icon={icon} />
                        </a>
                     
            </div>
      );
}

export default SocialLink;