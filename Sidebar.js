import React from 'react';
import './Sidebar.css';
import Sidebaroption from './Sidebaroption';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon/>
            <Sidebaroption active Icon={HomeIcon} text="Home"></Sidebaroption>
            <Sidebaroption Icon={SearchIcon} text="Explore"></Sidebaroption>
            <Sidebaroption Icon={NotificationsNoneIcon} text="Notification"></Sidebaroption>
            <Sidebaroption Icon={MailOutlineIcon} text="Mail"></Sidebaroption>
            <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmark"></Sidebaroption>
            <Sidebaroption Icon={ListAltIcon} text="List"></Sidebaroption>
            <Sidebaroption Icon={PermIdentityIcon} text="Profile"></Sidebaroption>
            <Sidebaroption Icon={MoreHorizIcon} text="More"></Sidebaroption>



        </div>
    )
}

export default Sidebar;
