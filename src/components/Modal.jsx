import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Button from "./Button";
import { MdLocationOn } from "react-icons/md";

function Modal({ open, setOpen, onSearch }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search, location);
    }
    handleClose(); // Close the modal after performing the search
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { padding: "10px" } }}>
      <DialogTitle>
        <label htmlFor="" className="flex pb-3 sm:flex items-center lg:w-4/12 border-b h-full">
          <MdLocationOn className="text-3xl mx-2 text-indigo-500" />
          <input
            type="text"
            name="location"
            className="h-full outline-none placeholder:truncate"
            placeholder="Filter by location..."
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </DialogTitle>

      <DialogContent className="">
        <div className="flex w-44 justify-around">
          <input className="ml-3" type="checkbox" />
          <p htmlFor="" className="font-bold">
            Full Time Only
          </p>
        </div>
        <Button
          name="Search"
          searchStyle="flex ml-5 bg-indigo-500 text-white p-2 px-20 mt-5 rounded"
          onClick={handleSearch}
        />
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
