import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data.json";
import { ThemeContext } from "../App";
import Button from "./Button";

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (search, location, fullTimeOnly) => {
    setSearch(search);
    setLocation(location);

    let filtered = data.filter((item) => {
      const title = item.position.toLowerCase();
      const companies = item.company.toLowerCase();

      return (
        title.includes(search.toLowerCase()) ||
        companies.includes(search.toLowerCase())
      );
    });

    if (location) {
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (fullTimeOnly) {
      filtered = filtered.filter((item) => item.fullTime);
    }

    setFilteredData(filtered);
  };

  const handleFullTimeOnly = () => {
    setFullTimeOnly(!fullTimeOnly);
    handleSearch(search, location, !fullTimeOnly);
  };

  const filteredElements = filteredData.map((item) => (
    <Card
      key={item.id}
      jobId={item.id}
      logo={item.logo}
      timePosted={item.postedAt}
      position={item.position}
      contract={item.contract}
      company={item.company}
      location={item.location}
      bgColor={item.logoBackground}
    />
  ));

  return (
    <div className={darkMode ? "bg-slate-900 h-screen " : "bg-gray-100 h-screen"}>
      <Navbar handleSearch={handleSearch} handleFullTimeOnly={handleFullTimeOnly} fullTimeOnly={fullTimeOnly} />
      <section
        className={
          darkMode
            ? "bg-slate-900  pb-10 grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 "
            : "grid grid-cols-1 md:grid-cols-2 mt-20 pb-10 lg:grid-cols-3 bg-gray-100"
        }
      >
        {filteredElements}
      </section>
      <div className={darkMode ? "flex justify-center pb-10 bg-slate-900" : "flex justify-center pb-10 bg-gray-100"}>
        <Button
          name="Load More"
          loadmoreStyle=" ml-5 bg-indigo-500 text-white p-2 px-5 rounded"
        />
      </div>
    </div>
  );
}

export default Home;
