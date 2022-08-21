import React, { useState } from 'react'

const Header = () => {
    const [sideBar, setSideBar] = useState('false')
  return (
    <>
        <header className="header">
            <div className="container flex">
                <div className="logo">
                    <img src="assets/logo.png" alt="" srcset="" />
                </div>
                <div className="nav">
                    <ul className={sideBar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSideBar(false)} >
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header