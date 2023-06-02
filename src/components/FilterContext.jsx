import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [locationFilter, setLocationFilter] = useState('');
  const [expertiseFilter, setExpertiseFilter] = useState('');

  const handleLocationFilterChange = (value) => {
    setLocationFilter(value);
  };

  const handleExpertiseFilterChange = (value) => {
    setExpertiseFilter(value);
  };

  return (
    <FilterContext.Provider
      value={{
        locationFilter,
        expertiseFilter,
        handleLocationFilterChange,
        handleExpertiseFilterChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
