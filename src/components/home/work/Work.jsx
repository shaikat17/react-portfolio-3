import React, { Fragment } from 'react'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IosShareIcon from '@mui/icons-material/IosShare';

import Data from './Data'

const Work = () => {
  return (
    <Fragment>
        <section className="work">
            <div className="heading">
                <h3>MY WORKS</h3>
                <h1>SOME of My Completed Projects</h1>
            </div>
            <div className="content">
                {Data.map((val) => {
                    return (
                        <Fragment>
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="overlay">
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <h2>{val.desc}</h2>
                                    </div>
                                    <div className="icon">
                                        <FullscreenIcon className="iconWork" />
                                        <IosShareIcon className="iconWork" />
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </section>
    </Fragment>
  )
}

export default Work