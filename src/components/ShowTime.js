import React, { useState, useEffect } from "react";

function ShowTime() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div>
      <div className="mb-5">
        <h4 className="text-center text-danger">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: "true",
          })}
        </h4>
      </div>
    </div>
  );
}

export default ShowTime;
