import React, {useState, useEffect} from 'react'
import "../css/Feed.css"

import { StoryReel } from "./StoryReel"
import { MessageSender } from "./MessageSender"
import { Post } from "./Post";

import db from '../firebase'

export function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({id:doc.id, data:doc.data()})))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            {
                posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        username={post.data.username}
                        image={post.data.image}
                        timestamp={post.data.timestamp}
                    />
                ))
            }
        </div>
    )
}

