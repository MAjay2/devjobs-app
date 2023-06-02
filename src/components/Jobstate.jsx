import React, { useEffect, useState } from 'react';
import data from '../data.json';
import Card from './Card';

function Jobstate() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(data);
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
      {state.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default Jobstate;
