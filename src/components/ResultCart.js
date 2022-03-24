import React from "react";
import ShowTime from "./ShowTime";

function ResultCart({ forecast }) {
  let getIcon = `https://openweathermap.org/img/wn/${forecast.icon}@2x.png
`;
  return (
    <div className="cardshow text-center">
      <div className="card opacity-50 mt-2">
        <h5 className="card-title">{forecast.city}</h5>
      </div>

      <div className="card opacity-75 mt-2">
        <div className="row m-0 p-0">
          <div className="col-sm-6 bg-dark m-0 p-0 opacity-100">
            <div className="card-body m-0">
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
