import React from 'react'
import "../css/Story.css"

import { Avatar } from "@material-ui/core";

export function Story({ image, profileSrc, title }) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story">
            <Avatar src={profileSrc} className="story__avatar" />
            <h4>{title}</h4>
        </div>
    )
}