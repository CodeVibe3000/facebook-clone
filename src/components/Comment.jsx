import React from 'react'
import { Avatar } from '@material-ui/core'

import "../css/Comment.css"

export function Comment({ profilePic, username, comment }) {
    return (
        <div  className="comment">
            <Avatar src={profilePic} />
            <div className="comment__message">
                <a className="comment__user" href="/">{username}</a> <p>{comment}</p>
            </div>
        </div>
    )
}