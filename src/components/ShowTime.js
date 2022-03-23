import React, { useState, useEffect } from "react";

function ShowTime() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div>
      <div className="card opacity-50 mt-2">
        <h5 className="card-title">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </h5>
      </div>
    </div>
  );
}

export default ShowTime;
