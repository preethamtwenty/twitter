import React ,{useState,useEffect} from 'react';
import { Avatar, Button } from "@material-ui/core";
import './tweet.css';
import db from "./firebase";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";


function Tweet() {
    const sendtweet=e=>{
      e.preventDefault();
      db.collection('posts').add({
        displayName:"Preetham",
        username:"preetham.lekkala",
        verfied:true,
        text:tweetmessage
      })
    }

    const[tweetmessage,settweetmessage]=useState("");
    const[tweetimage,settweetimage]=useState("");
    return (
        <div className="tweetBox">
        <div className="tweetBox__input">
        <Avatar src={window.location.origin+'/p.jpg'} />
        
        
        <input onChange ={e=>settweetmessage(e.target.value)} value={tweetmessage} placeholder="wassup"></input>
        <div>
        <input
          
        onChange ={e=>settweetmessage(e.target.value)}
        
          className="tweetBox__imagInput"
          placeholder="Optional: Ener image URL"
          type="text"
        />
         
        </div>
        
        
       
        
        
        </div>
        <Button onClick={sendtweet} className="tweetBox__tweetButton">Tweet</Button>
            
        </div>
    )
}

export default Tweet;
