import React from 'react'
import About from '../home/about/About'
import Blog from '../home/blog/Blog'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import Service from '../home/service/Service'
import Skill from '../home/Skill'
import Work from '../home/work/Work'
import Wrapper from '../home/Wrapper'
import WrapperOne from '../home/WrapperOne'

const HomePages = () => {
    return (
        <React.Fragment>
            <Home />
            <Branding />
            <About />
            <Service />
            <Wrapper />
            <Skill />
            <WrapperOne />
            <Work />
            <Blog />
        </React.Fragment>
    )
}

export default HomePages