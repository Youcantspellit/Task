import styled,  { keyframes }  from 'styled-components'

export const RocketDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    opacity: ${props => (props.fuel> 0) ?  1 :0 }; 

   /* transform: ${props => `translateY(${props.fuel}px)`}; */

`
export const Fuel = styled.h4`
    color: white;
`
export const RocketImg = styled.img`
    height: 100px;
`

const rotate360 = keyframes`
  from {
    transform: translateY(3px);
  }
  to {
    transform: translateY(0);
  }
`
export const RocketFlames = styled.img`
    height: 100px;
    animation: ${rotate360} infinite 0.5s alternate; 
`
