import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterPost = ({ id }) => {
  return (
    <div className="rounded-md flex justify-center items-center my-4">
          <TwitterTweetEmbed tweetId={id}/>
 
        
    </div>
  );
};

export default TwitterPost;
