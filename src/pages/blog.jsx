import React  from 'react';
import {useState, useEffect}  from 'react';
import styled from 'styled-components';
//import { NavLink } from "react-router-dom";

const SBlog = styled.div`
grid-area:3/1/13/13;
background: blue;
  border: solid 2px blue; 
  text-align:center;
`



 const Blog = () => {
  return (
<SBlog> 
Blog 
 </SBlog>
  );
};


export {Blog} ;