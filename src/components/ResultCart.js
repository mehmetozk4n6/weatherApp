import moment from "moment";
import React from "react";

function ResultCart({ forecast }) {
  let getIcon = `http://openweathermap.org/img/wn/${forecast.icon}@2x.png
`;
  return (
    <div className="cardshow text-center">
      <div className="card opacity-50 mt-2">
        <h5 className="card-title">{forecast.day}</h5>
      </div>
      <div className="card opacity-50 mt-2">
        <h5 className="card-title">{forecast.city}</h5>
      </div>

      <div className="card opacity-75 mt-2">
        <div className="row">
          <div className="col-sm-6 bg-dark">
            <div className="card-body ">
              <img src={getIcon} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h1 className="card-title">{forecast.temperature}°C</h1>
              <h3 className="card-text">{forecast.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
