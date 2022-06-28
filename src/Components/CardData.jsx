import React from "react";
import MyCard from "./MyCard";
import { useState, useEffect } from "react";
import "./MyCard.css";
import axios from "axios";
import PaginationComponents from "./PaginationComponents";
import DateSort from "./DateSort";


function CardData() {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [dateOrder, setDateOrder] = useState("asc");




  useEffect(() => {
    getData({ page,dateOrder});
  }, [page,dateOrder]);
  const getData = async ({ page,dateOrder}) => {
    setLoading(true);

    axios({
      method: "get",
      url: "http://localhost:3000/data",
      params: {
        _page: page,
        _limit: 4,
        _sort: "date",
        _order: `${dateOrder}`,

      },
    })
      .then((res) => {
        setMydata(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <div>

      {loading && <div>Loading...</div>}

      <DateSort dateOrder={dateOrder} setDateOrder={setDateOrder}/>


      <div className="filter">
        <h2>Top-ten Like :-</h2>
        <button>Top Ten Like</button>
      </div>
      {/* data mapping section.......................................... */}
      <div className="container">
        {mydata.map((e)=>(
          <MyCard key={e.id} mydata={e}/>
        ))}
      </div>

      {/* pagination section..................................................... */}
      <div className="pagination">
        <PaginationComponents
          currentPage={page}
          lastPage={10}
          onPageChange={setPage}
        />
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>
    </div>
  );
}

export default CardData;
