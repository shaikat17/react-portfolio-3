import React, { Fragment } from "react";

const Wrapper = () => {

    const data = [
        {
          title: "LOOKING FOR EXCLUSIVE SERVICES?",
          heading: "Get The Best For Your Business",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]


  return (
    <Fragment>
      <section className="branding wrapper">
        <div className="container">
        {data.map((val) => {
            return (
                <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <button className="primary-btn">Contact Us</button>
                </div>
            )
        })}
        </div>
      </section>
    </Fragment>
  );
};

export default Wrapper;
