import React from 'react'
import '../css/SidebarRow.css'
import { Avatar } from '@material-ui/core'

export function SidebarRow({ title, Icon, src }) {

    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}></Avatar>}
            { Icon && <Icon /> }
            <h4>{title}</h4>
        </div>
    )
}
