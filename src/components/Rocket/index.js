import React, {useState, useEffect} from 'react';
import { RocketDiv, Fuel, RocketImg, RocketFlames } from './styles.js'
import rocketImg from '../../assets/rocket.png'
import rocketFlames from '../../assets/thrust.png'

const Rocket = ({item}) => {
  const [fuel, setFuel] = useState(item.first_stage.fuel_amount_tons + item.first_stage.fuel_amount_tons);
  const [move, setMove] = useState(true);

  useEffect(
    () => {
      setMove(
        setInterval(() => {
          setFuel(fuel - 100)

        }, 1000)
   /*           if (fuel> 0) {
            move = true
          } else {
            move = false
          } */
      );
  
      return function cleanup() {
        console.log("cleaning up");
        clearInterval(move);
      };
    },
    [fuel]
  );  
    return (

    <RocketDiv fuel={fuel} move={move}>
      <Fuel>{fuel} t fl</Fuel>
      <RocketImg src={rocketImg} alt='rocketImg' />
      <RocketFlames src={rocketFlames} alt='rocketFlames' />
   </RocketDiv>
  )
};

/* function Rocket({item}) {
  let [fuel, setFuel] = useState(item.first_stage.fuel_amount_tons + item.first_stage.fuel_amount_tons);
  console.log(fuel)

  useEffect(() => { 
      while (fuel > 0) {
    const interval = setInterval(() => {
      setFuel(valueOf(fuel) - 100);
      console.log(fuel)
    }, 1000); 
    } 
  }, [] );


} */

export default Rocket;