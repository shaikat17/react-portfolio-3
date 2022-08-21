import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

import GridViewIcon from '@mui/icons-material/GridView';
import WorkIcon from '@mui/icons-material/Work';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const btnClickHandle = () => {
        setSidebar(!sidebar)
        console.log("Running")
        console.log(!sidebar)
    }

    return (
        <React.Fragment>
            <header className="header">
                <div className="container flex">
                    <div className="logo">
                        <img src="assets/logo.png" alt="" srcset="" />
                    </div>
                    <div className="nav">
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)} >
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
                            <button className="navbar-items-icon" onClick={btnClickHandle}>{sidebar ? <CloseIcon /> : <MenuIcon />}</button>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header