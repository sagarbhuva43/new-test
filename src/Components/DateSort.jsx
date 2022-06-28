import React from "react";

function DateSort({ setDateOrder, dateOrder}) {
  return (
    <>
      <div>
        <h3>Sort By Date :-</h3>
        <button
          disabled={dateOrder === "desc"}
          onClick={() => {
            setDateOrder("desc");
          }}
        >
           Descending
        </button>
        <br />
        <button
          disabled={dateOrder === "asc"}
          onClick={() => {
            setDateOrder("asc");
          }}
        >
           Ascending
        </button>
          </div>
    </>
  );
}
export default DateSort;
