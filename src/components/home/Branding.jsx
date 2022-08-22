import React, { Fragment } from "react";

const Branding = () => {

    const data = [
        {
          id: "01",
          heading: "Digital Branding",
          desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
        {
          id: "02",
          heading: "Team Management",
          desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
        {
          id: "03",
          heading: "Creative Mind",
          desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
      ]

  return (
    <Fragment>
      <section className="branding">
        <div className="container grid">
            {data.map((value) => {
                return (
                    <div className="box flex">
                        <div className="text">
                            <h1>{value.id}</h1>
                        </div>
                        <div className="par">
                            <h2>{value.heading}</h2>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      </section>
    </Fragment>
  );
};

export default Branding;
