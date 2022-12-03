import React from 'react';
import styled from 'styled-components';
 
 


const SHome = styled.div`
  grid-area: 3/1/13/13;
  background: blue;
  border: solid 2px blue; 
  text-align:center;
`


const Home = () => {
  
  return (
    <SHome>
      Моё первое приложение 
    </SHome>
  );
};

export {Home} ;