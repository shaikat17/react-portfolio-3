import React from 'react'
import About from '../home/about/About'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import Service from '../home/service/Service'
import Skill from '../home/Skill'
import Wrapper from '../home/Wrapper'

const HomePages = () => {
    return (
        <React.Fragment>
            <Home />
            <Branding />
            <About />
            <Service />
            <Wrapper />
            <Skill />
        </React.Fragment>
    )
}

export default HomePages