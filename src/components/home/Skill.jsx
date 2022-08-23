import React, { Fragment } from "react";

const Skill = () => {

    const data = [
        {
          title: "Every Day is a New Challenge",
          para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
          para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
        },
      ]

  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>WHY CHOOSE ME</h3>
            <h1>Some Of My Skills</h1>
          </div>
          <div className="content flex">
            <div className="left topMargin">
              <Progress done='90' title="HTML" />
              <Progress done='85' title="CSS" />
              <Progress done='70' title="Javascript" />
              <Progress done='68' title="React JS" />
            </div>
            <div className="right mtop">
            {data.map((val) => {
                
            })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skill;