import React from 'react'
import "../css/Header.css"

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Avatar, IconButton } from '@material-ui/core'

import { useStoreState } from 'easy-peasy'

export function Header() {

    let user = useStoreState(store => store.user)

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"></input>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon size="large" />
                </div>
                <div className="header__option">
                    <FlagIcon size="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon size="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon size="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon size="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

