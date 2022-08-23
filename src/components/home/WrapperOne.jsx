import React, { Fragment } from 'react'

const WrapperOne = () => {

    const data = [
        {
          num: "520%",
          text: "AWARDS WINNING",
        },
        {
          num: "99%",
          text: "SATISFIED CLIENTS",
        },
        {
          num: "3325",
          text: "CREATIVE PROJECTS",
        },
        {
          num: "54380",
          text: "LINES OF CODE ",
        },
      ]

  return (
    <Fragment>
        <div className="branding wrapperOne">
            <div className="container grid1">
                {data.map((val) => {
                    return (
                        <Fragment>
                            <div className="box">
                                <h1>{val.num}</h1>
                                <p>{val.text}</p>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    </Fragment>
  )
}

export default WrapperOne