import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";

import GridViewIcon from '@mui/icons-material/GridView';
import WorkIcon from '@mui/icons-material/Work';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const [sideBarState, setSideBarState] = useState(false)

    // useEffect(() => {
    //     console.log("effect")
    //     console.log(sideBarState)
    // },[sideBarState])

    // const btnClickHandle = () => {
    //     setSideBarState(prev => !prev)
    //     // console.log("Running")
    //     // console.log(sidebar)
    // }

    return (
        <React.Fragment>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <img src="assets/logo.png" alt="" srcset="" />
                    </div>
                    <div className="nav">
                        <ul className={sideBarState ? "nav-links-sidebar" : "nav-links"} onClick={() => setSideBarState(false)}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/pages">Pages</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li className="icon">
                                <SearchOutlinedIcon className="HeaderIcon" />
                                <WorkIcon className="HeaderIcon" />
                                <GridViewIcon className="HeaderIcon" />
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-items-icon" onClick={() => setSideBarState(!sideBarState)}>{sideBarState ? <CloseIcon /> : <MenuIcon />}</button>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header


