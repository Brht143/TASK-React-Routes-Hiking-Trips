import React, { useState } from "react";
import { useSearchParams, createSearchParams, NavLink} from "react-router-dom";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";

let count = 0;
function TripsList() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams ] = useSearchParams("");
  const difficulty = searchParams.get("difficulty") || "";
  
  const trips = tripsData
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => trip.difficulty.toLowerCase().includes(difficulty.toLowerCase()))
    .map((trip, index) => <TripItem trip={trip} key={index} />);


  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
            <NavLink to="/trips?difficulty=easy">
              <button className="btn btn-primary btn-xl">Easy</button>
            </NavLink>
            <NavLink to="/trips?difficulty=moderate">
              <button className="btn btn-primary btn-xl">Moderate</button>
            </NavLink>
            <NavLink to="/trips?difficulty=hard">
            <button className="btn btn-primary btn-xl">Hard</button>
            </NavLink>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsList;
