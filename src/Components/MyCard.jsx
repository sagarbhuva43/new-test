import React from "react";
import "./MyCard.css";
function MyCard({ mydata,id}) {
  console.log(mydata);
  return (
    <>
      <div className="container1" key={id}>
        <div className="card">
          <div className="mainsection">

            <section className="b">
              <h1 className="h1">{mydata.post}</h1>
              <div className="text">

                <h4>Like - {mydata.like}</h4>
              </div>

            </section>
            <section className="c">
              <h2 className="">{mydata.date}/10/2022</h2>
              <div>
                <h4>Comments : {mydata.comment} </h4>
              </div>
            </section>
          </div>
          <div className="gap"></div>

        </div>
      </div>
    </>
  );
}
export default MyCard;
