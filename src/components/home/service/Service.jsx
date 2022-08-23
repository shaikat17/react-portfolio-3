import React, { Fragment } from "react";
import ServicesData from "./ServiceData";

const Service = () => {
  return (
    <Fragment>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>MY SERVICES</h3>
            <h1>Interactive Services Offered Me</h1>
          </div>
          <div className="contain grid topMargin">
            {ServicesData.map((val) => {
              return (
                <Fragment>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" srcset="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Service;
