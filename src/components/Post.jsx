import React, { useState, useEffect } from 'react'
import "../css/Post.css"

import { Avatar, IconButton } from "@material-ui/core";
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from "@material-ui/icons";
import { Comment } from './Comment';

import db from "../firebase";
import firebase from 'firebase'

import { useStoreState } from 'easy-peasy'


export function Post({ profilePic, username, message, image, timestamp, id }) {
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])


    useEffect(() => {
        db.collection('comments').where("postId", "==", id).orderBy('timestamp', "desc").onSnapshot(snapshot => {
            setComments(snapshot.docs.map(doc => {
                return doc.data()
            }))
        })
    }, [])

    let user = useStoreState(store => store.user)

    let handleSubmit = (e) => {
        e.preventDefault()
        db.collection('comments').add({
            postId: id,
            username: user.displayName,
            comment,
            profilePic: user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('')
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""></img>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <IconButton>
                        <ThumbUp />
                    </IconButton>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <IconButton onClick={() => setShowComments(!showComments)}>
                        <ChatBubbleOutline />
                    </IconButton>
                    <p>Comments</p>
                </div>
                <div className="post__option">
                    <IconButton>
                        <NearMe />
                    </IconButton>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <IconButton>
                        <AccountCircle />
                        <ExpandMore />
                    </IconButton>
                </div>
            </div>
            {showComments ? (
                <div className="post__comments">
                    {
                        comments.map(({ username, profilePic, comment }) => (
                            <Comment
                                username={username}
                                profilePic={profilePic}
                                comment={comment}
                             />
                        ))
                    }
                    <div className="commenter">
                        <Avatar src={user.photoURL} />
                        <form onSubmit={handleSubmit}>
                            <input className="post__comment-input" value={comment} onChange={
                                (e) => {
                                    setComment(e.target.value)
                                }
                            } placeholder={`What do you think about this post, ${user.firstName}`}></input>
                            <button type="submit">Comment</button>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
