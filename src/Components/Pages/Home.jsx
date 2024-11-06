import React, { useCallback, useState,useContext } from "react";
import Fetched from "../../Hooks/Fetched";
import { Notification_context } from "./Friends";


const PostItem = ({ post }) => {
  const{notify,setNotify}=useContext(Notification_context)
  const [like, setLike] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const[click_comment,setClick_comment]=useState(false)
  const[comment,setComment]=useState('')
  const[commentSection,setCommentSection]=useState([])
  const Like_Handler=()=>{
    setLike(prev => prev + 1);
    setNotify([...notify,`You just liked a post`])
  }
  const DisLike_handler=()=>{
    setDislikes(prev=>prev+1);
    setNotify([...notify,`You just disliked a post`])
  }
  const Comment_handler=useCallback(()=>{
    if(!comment) return;
    setClick_comment(true)
    setComment('')
    const New_div={
        id:Date.now(),
        content:comment,
        timestamp: new Date().toLocaleTimeString()
    }
    setCommentSection([...commentSection,New_div])
    setNotify([...notify,`You just commented on the post`])
  },[comment])

  return (
    <div id="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div>
        Tags: {post.tags.map((tag, i) => (
          <span key={i}>#{tag}, </span>
        ))} 
      </div>
      <button onClick={Like_Handler}>
        {like} Like
      </button>
      <button onClick={DisLike_handler}>
        {dislikes} Dislike
      </button>
      <input placeholder="Enter your comment here" value={comment} onChange={e=>setComment(e.target.value)}/>
      <button onClick={Comment_handler}>Comment</button>
      {click_comment?(
  <div className="comments-section">
    {commentSection.map((e,i) => (
      <div key={i} className="comment-item">
        <h2>You Commented: </h2> 
        <p>{e.content} at {e.timestamp}</p>
      </div>
    ))}
  </div>
):null}
    </div>
  );
};

const Posts = ({ data }) => {
  const posts = data.posts;
  
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="home_container">
      <Fetched url={'https://dummyjson.com/posts'} renderSuccess={Posts} />
    </div>
  );
}