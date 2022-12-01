import React from 'react';
import styled from 'styled-components';
import { device } from './@media';
import {Routes, Route, Outlet } from "react-router-dom";

import {Layout} from './components/layuot.jsx';
import {Home} from './pages/home.jsx';
import {Aboud} from './pages/about.jsx';
import {Blog} from './pages/blog.jsx';
import {Singlepage} from './pages/singlepage.jsx';
import {Notfound} from './pages/notfound.jsx';


const SApp = styled.div`
grid-area: 1/1/13/13; 
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 55px); 
background: green ;
color: black ;


@media ${device.mobileM} { 
border: solid 0.2px blue;
}
`
 
const App = () =>  {
  return (
<SApp >
<Routes>
<Route path='/' element={<Layout/>} >
  <Route index element={<Home/>}/>
  <Route path='about' element={<Aboud/>}/>
  <Route path='blog' element={<Blog/>} />
   <Route path='blog/:id' element={<Singlepage/>} />
  <Route path='*' element={<Notfound/>} />
</Route>
</Routes>
<Outlet />
</SApp>
  );
};



export default App;
//npm start