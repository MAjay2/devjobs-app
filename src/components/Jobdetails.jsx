import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"
import { ReactSVG } from "react-svg";
import { ThemeContext } from "../App";
import Navbar from "./Navbar";
import Header from "./Header";

const Jobdetails = () => {
  const { id } = useParams();
  const jobId = parseInt(id);
  console.log('jobId');

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "bg-slate-900 " : "bg-gray-100 "}>
      <Header />
      {data.map((item, index) => {
        if (item.id === jobId) {
          return (
            <div key={index}>
              <div
                className={
                  darkMode
                    ? "sm:flex  items-center relative rounded-lg -top-14 bg-slate-900 shadow-2xl w-11/12 sm:w-4/6 mx-auto"
                    : "sm:flex  items-center relative rounded-lg -top-14 bg-white w-11/12 sm:w-4/6 mx-auto"
                }
              >
                <div
                  className="mx-auto sm:static relative w-20 h-20 -top-10  sm:rounded-none rounded-lg sm:mx-0 sm:w-40 sm:h-32 flex justify-center items-center"
                  style={{ backgroundColor: `${item.logoBackground}` }}
                >
                  <ReactSVG src={item.logo} />
                </div>
                <div
                  className={
                    darkMode
                      ? "flex flex-col sm:flex-row bg-midnight justify-between items-center  w-full px-5 pb-7 sm:pb-0"
                      : "flex flex-col sm:flex-row justify-between items-center  w-full px-5 pb-7 sm:pb-0"
                  }
                >
                  <div className="  text-center sm:text-left pb-5  ">
                    <h1
                      className={
                        darkMode
                          ? "font-bold text-white text-lg pb-2"
                          : "font-bold text-lg pb-2"
                      }
                    >
                      {item.company}
                    </h1>
                    <span className="text-gray-500">{item.website}</span>
                  </div>

                  <button
                    className={
                      darkMode
                        ? "hover:bg-light_primary text-white  bg-blue-950 text-primary p-3 rounded-lg font-semibold "
                        : "hover:bg-light_primary  bg-gray-100 text-primary p-3 rounded-lg font-semibold "
                    }
                  >
                    Company Site
                  </button>
                </div>
              </div>

              <div
                className={
                  darkMode
                    ? "sm:w-4/6 w-11/12 bg-dark_blue rounded-lg mb-20 pb-10 mx-auto px-10"
                    : "sm:w-4/6 w-11/12 bg-white rounded-lg mb-20 pb-10 mx-auto px-10"
                }
              >
                <div className="flex pt-6 text-gray-500 w-36 justify-between pb-3">
                  <p>{item.postedAt}</p>
                  <span className="font-black">.</span>
                  <p>{item.contract}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between pb-10">
                  <div className="pb-8 sm:pb-0">
                    <h1
                      className={
                        darkMode
                          ? "font-bold text-xl text-white"
                          : "font-bold text-xl"
                      }
                    >
                      {item.position}
                    </h1>
                    <span className="text-indigo-500">{item.location}</span>
                  </div>

                  <button className="hover:bg-light_primary bg-indigo-500 p-3 rounded-lg font-semibold text-white ">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-500">{item.description}</p>

                <h1
                  className={
                    darkMode
                      ? "pt-6 pb-8 text-lg font-semibold text-white"
                      : "pt-6 pb-8 text-lg font-semibold"
                  }
                >
                  Requirements
                </h1>
                <p className="pb-8 text-gray-500">
                  {item.requirements.content}
                </p>
                {item.requirements.items.map((point) => {
                  return (
                    <ul className="py-2 text-gray-500 pl-3 list-disc marker:text-primary">
                      <li className=" ">{point}</li>
                    </ul>
                  );
                })}

                <h1
                  className={
                    darkMode
                      ? "pt-6 pb-8 text-lg font-semibold text-white"
                      : "pt-6 pb-8 text-lg font-semibold"
                  }
                >
                  What you will do
                </h1>
                <p className="pb-8 text-gray-500">{item.role.content}</p>
                {item.role.items.map((point) => {
                  return (
                    <ul className="py-2 text-gray-500 pl-3 list-decimal marker:text-primary">
                      <li className=" ">{point}</li>
                    </ul>
                  );
                })}
              </div>

              <div
                className={darkMode ? " bg-dark_blue py-7" : " bg-white py-7"}
              >
                <div
                  className={
                    darkMode
                      ? "bg-dark_blue text-white flex  w-5/6 sm:w-4/6 mx-auto justify-between "
                      : "bg-white flex  w-5/6 sm:w-4/6 mx-auto justify-between "
                  }
                >
                  <div className="hidden sm:block">
                    <h1>{item.position}</h1>
                    <p>So Digital Inc.</p>
                  </div>

                  <button className="hover:bg-light_primary bg-indigo-500 p-3 rounded-lg font-semibold text-white w-full sm:w-32">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Jobdetails;