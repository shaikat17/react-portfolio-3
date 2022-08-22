import React from 'react'
import About from '../home/about/About'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import Service from '../home/service/Service'

const HomePages = () => {
    return (
        <React.Fragment>
            <Home />
            <Branding />
            <About />
            <Service />
        </React.Fragment>
    )
}

export default HomePages