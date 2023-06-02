import React, { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { ThemeContext } from "../App";
import Button from "./Button";
import Modal from "./Modal";

function Searchbar({ onSearch, handleFullTimeOnly, onCheckboxChange }) {
  const { darkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (onSearch) {
      onSearch(search, location, fullTimeOnly);
    }
  }

  function handleFullTimeOnlyChange(e) {
    const checked = e.target.checked;
    setFullTimeOnly(checked);
    if (handleFullTimeOnly) {
      handleFullTimeOnly(checked);
    }
    if (onCheckboxChange) {
      onCheckboxChange(checked);
    }
  }

  return (
    <form
      className={
        darkMode
          ? "w-11/12 shadow-lg flex bg-slate-900 rounded h-20 mx-auto mt-16 rounded-lg"
          : "w-11/12 flex rounded h-20 mx-auto mt-16 rounded-lg"
      }
    >
      {/* Search input */}
      <label
        className={
          darkMode
            ? "shadow-lg rounded-l-lg bg-slate-900 flex items-center w-8/12 sm:w-4/12 px-3"
            : "rounded-l-lg bg-white flex items-center w-8/12 sm:w-4/12 px-3"
        }
        htmlFor=""
      >
        <svg
          className="mr-4"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"/>
        </svg>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className={
            darkMode
              ? "border-r text-white w-full outline-none h-full bg-slate-900"
              : "border-r w-full outline-none h-full "
          }
          placeholder="Filter by title, components, expertise..."
        />
      </label>

      {/* Location input */}
      <label
        className={
          darkMode
            ? "bg-slate-900 shadow-lg hidden sm:flex items-center w-4/12"
            : "bg-white hidden sm:flex items-center w-4/12"
        }
        htmlFor=""
      >
        <svg
          className="mr-3"
          width="17"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          className={
            darkMode
              ? "w-full text-white bg-slate-900 outline-none border-r h-full"
              : "w-full outline-none border-r h-full"
          }
          placeholder="Filter by location"
        />
      </label>

      {/* Full Time Only checkbox and search button */}
      <div
        className={
          darkMode
            ? "w-4/12 shadow-lg rounded-r-lg flex sm:w-4/12 items-center text-white justify-around bg-slate-900"
            : "w-4/12 rounded-r-lg flex sm:w-4/12 items-center justify-around bg-white"
        }
      >
        <div className="flex items-center">
          <input
            className="ml-3"
            type="checkbox"
            value="fullTime"
            checked={fullTimeOnly}
            onChange={handleFullTimeOnlyChange}
          />
          <p htmlFor="" className="ml-1">
            Full Time Only
          </p>
        </div>

        <FaFilter
          onClick={() => setOpenModal(true)}
          className="block sm:hidden text-2xl fill-gray-500"
        />

        <MdSearch
          onClick={handleSearch}
          className="block sm:hidden sm:block bg-indigo-500 rounded p-1 text-2xl w-10 h-8"
        />

        <Button
          name="Search"
          searchStyle="hidden sm:block ml-5 bg-indigo-500 text-white p-2 px-5 rounded"
          onClick={handleSearch}
        />
      </div>

      <Modal open={openModal} setOpen={setOpenModal} onSearch={onSearch} />
    </form>
  );
}

export default Searchbar;
