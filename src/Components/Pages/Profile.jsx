import React, { useCallback, useEffect, useMemo, useState } from "react";
import image from '../../Assets/web/me.jpeg'
import image2 from '../../Assets/web/main.jpeg'



const Post_items=()=>{
    const[Lcount,setLCount]=useState(0);
    const[dcount,setDcount]=useState(0)
    return(
        <div className="interaction-container">
             <div className="counts-display">
                <h4>Likes:{Lcount}</h4>
                <h4>Dislikes:{dcount}</h4>
            </div>
            <div className="button-group">
                <button className="btn-like" onClick={()=>setLCount(Lcount+1)}>Like</button>
                <button className="btn-dislike" onClick={()=>setDcount(dcount-1)}>Dislike</button>
            </div>
        </div>
    )
}

const Profile_pic=()=>{
    const[post,setPost] =useState()
    const [clicked,setClicked]=useState(false)
    const[clicked2,setClicked2]=useState(false)
    const[userpost,setUserpost]=useState([])
    const User_data={
        name:'aizen',
        age:22,
        city:'Sydeny',
    }
    
    const Click_Handeler=useCallback(()=>{
        if(!post) return;
        setPost('')
        setClicked2(true)
        const new_post={
            id:Date.now(),
            content:post,
            timestamp: new Date().toLocaleTimeString()
        }
        setUserpost([...userpost,new_post]);
        setPost('')
    },[post,userpost])
    
    const Clicked=()=>{
       setClicked(!clicked)
    }
    return(
        <div className="profile-container">
            <div className="profile-header">
                <img className="cover-image" src={image}/>
                <div className="profile-picture-container">
                    <div className="profile-picture-wrapper">
                        <img src={image2}/>
                    </div>
                </div>
            </div>
            
            <div className="profile-actions">
                <button className="btn-details" onClick={Clicked}>View your Detail</button>
                <div className="post-creation">
                    <input 
                        className="post-input" 
                        placeholder="Write what's on you mind" 
                        value={post} 
                        onChange={e=>setPost(e.target.value)}
                    />
                    <button className="btn-post" onClick={Click_Handeler}>Post</button>
                </div>
            </div>

            {clicked && (
                <div className="user-details">
                    <h1>Name:{User_data.name}</h1>
                    <h2>Age:{User_data.age}</h2>
                    <h3>City:{User_data.city}</h3>
                </div>
            )}
            
            {clicked2 && (
                <div className="posts-container">
                    {userpost.map((element,i)=>(
                        <div key={i} className="post-card">
                            <div className="post-header">
                                <h1>{User_data.name} posted:</h1>
                                <p className="post-timestamp">Uploaded at: {element.timestamp}</p>
                            </div>
                            <p className="post-content">{element.content}</p>
                            <Post_items/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function Profile(){
    return(
        <div>
            <Profile_pic/>
        </div>
    )
}