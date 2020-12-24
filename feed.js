import React, {useState,useEffect} from "react";
import './feed.css';
import Tweet from './tweet';
import Post from './post';
import db from './firebase';


function Feed(){

    const[posts,setposts]=useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setposts(snapshot.docs.map(doc=>doc.data()))
        ))


    },[])

    return(
        <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <div className="tweet_box">
        <Tweet/>
        {posts.map(post=>(
            <Post
            displayName={post.displayName}
            username={post.username}
            image={post.image}
            text={post.text}
            verified={post.verified}/>


        ))
        
        }
        <Post displayName="Preetham"/>
        
        </div>
        </div>
  
        
       
    )
}
export default Feed;