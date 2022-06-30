import React from "react";

export default function Data({studentList}) {
     return studentList.map((details,index) =>(
    <div className="box" key={index} style={{width: "540px"}}>
      <div className="row1">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{details.details.name}</h5>
            <h6 className="card-text">
              {details.details.gender}
            </h6>
            <h6 className="card-text">
              {details.details.email}
            </h6>
            <h6 className="card-text">
              {details.details.website}
            </h6>
            <h6 className="card-text">
              {details.details.response}
            </h6>
          </div>
        </div>
        <div className="img">
          <img src={details.details.image_link} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  ));
}