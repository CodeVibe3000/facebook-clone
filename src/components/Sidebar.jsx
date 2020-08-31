import React from 'react'
import { SidebarRow } from './SidebarRow'

import '../css/Sidebar.css'

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

import { useStoreState } from 'easy-peasy'

export function Sidebar() {

    let user = useStoreState(store => store.user)

    return (
        <div className="sidebar">
           <SidebarRow src={user.photoURL} title={user.displayName} />
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
           <SidebarRow Icon={PeopleIcon} title="Friends" />
           <SidebarRow Icon={ChatIcon} title="Messenger" />
           <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
           <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        </div>
    )
}
