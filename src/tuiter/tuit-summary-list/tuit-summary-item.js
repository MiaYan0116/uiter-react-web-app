import React from "react";
const TuitSummaryItem = (
  {
    tuit = {
      "topic": "Weekend",
      "userName": "Elmo",
      "time": "2h",
      "title": "Feeling absolutely elated! Just had the most fantastic weekend getaway. 😄🌟",
      "image": "Elmo.jpg"
    }
  }
) => {
  return(
    <li className="list-group-item border" style={{paddingLeft: '1em'}}>
      <div className="row">
        <div className="col-10">
          <div>{tuit.userName} . {tuit.time}</div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.title}</div>
        </div>
          <div className="col-2">
          	<img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
          </div>
      </div>
    </li>
    );
};
export default TuitSummaryItem;