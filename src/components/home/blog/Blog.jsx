import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React, { Fragment } from 'react'
import Blogdata from './Blogdata'

const Blog = () => {
  return (
    <Fragment>
        <section className="blog services">
            <div className="container topMargin">
                <div className="heading">
                    <h3>LATEST BLOG</h3>
                    <h1>Read Inspirational Story Every Week</h1>
                </div>
                <div className="contain grid topMargin">
                    {
                        Blogdata.map((val) => {
                            return (
                                <Fragment>
                                    <div className="box">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>{val.date}</span>
                                            <h2>{val.title}</h2>
                                            <a href="/">Read More 
                                            <KeyboardDoubleArrowRightIcon className="icon" /> </a>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Blog