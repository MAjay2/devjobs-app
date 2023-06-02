import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";

function Card({ bgColor, logo, timePosted, position, company, contract, location,jobId }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex justify-center">
      <div className={darkMode ? "px-3 mt-20 w-96 h-64 bg-slate-800 rounded" : "px-3 mt-20 w-96 h-64 bg-white rounded"}>
        <div style={{backgroundColor: bgColor}} className="relative -top-5 mb-5 bg-black w-10 h-10 flex justify-center items-center rounded-lg p-5 ml-5">
          <ReactSVG src={logo} />
        </div>
        <p className="ml-5 mt-5 font-light text-gray-500">
          {timePosted}.{contract}
        </p>
        <Link to={`/jobdetails/${jobId}`}>
          <h2 className={darkMode ? "ml-5 mt-5 text-white hover:text-gray-500 font-bold text-xl" : "ml-5 hover:text-gray-500 mt-5 font-bold text-xl"}>
            {position}
          </h2>
        </Link>
        <p className="ml-5 text-gray-500 mt-5 font-light">{company}</p>
        <p className="mt-10 ml-5 text-indigo-500">{location}</p>
      </div>
    </div>
  );
}

export default Card;
