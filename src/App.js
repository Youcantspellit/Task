import React, { useState, useEffect } from 'react';
import Rocket from './components/Rocket/index.js';
import { BG } from  './styles.js';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
    const result = await axios(
      'https://api.spacexdata.com/v2/rockets',
    );
    setData(result.data);
  }
  fetchData();
  },[]);
  return (
    <BG>
      {data.map(item => (
        
        <Rocket key={item.rocketid} item={item}></Rocket>
      ))}
    </BG>
  );
}

export default App;
