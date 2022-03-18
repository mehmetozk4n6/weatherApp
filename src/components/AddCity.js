import React from "react";

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function AddCity({ setCity }) {
  const city = (e) => {
    e.preventDefault();
    let val = e.target.firstChild.value;
    val = capitalize(val);
    if (val !== "") {
      setCity(val);
    }
    e.target.firstChild.value = "";
  };

  return (
    <div>
      <form onSubmit={city}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city name"
        />
      </form>
    </div>
  );
}

export default AddCity;
