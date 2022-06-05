import { Tweet } from 'react-twitter-widgets'
import Blockquote from '@yozora/react-blockquote'
import '@yozora/react-blockquote/lib/esm/index.css'

const TwitterPost = ({ id }) => {
  return (
    <div className="rounded-md flex justify-center items-center my-4">
          <Tweet tweetId={id} options={{theme: 'dark'}} />
 
        
    </div>
  );
};

export default TwitterPost;
