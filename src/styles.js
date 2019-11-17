import styled from 'styled-components'
import bg from './assets/bg.jpg'

export const BG = styled.div`
    position: relative;
    width: 100vw;
    height:100vh;
    background-image: url(${bg});
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: end;
    justify-content: space-evenly;
`