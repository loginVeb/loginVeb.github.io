import React from 'react';
import styled from 'styled-components';
import {NavLink, Outlet } from "react-router-dom";

const SLayout = styled.div`
grid-area: 1/1/13/13; 
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%); 
background: green ;
color: black ;

`
const Header = styled.header`
grid-area: 1/1/12/13; 
display:flec;
justify-content: center ;
background: pink ;
color: blue ;
`
const Footer = styled.footer`
grid-area: 12/1/13/13; 
background: pink ;
color: blue ;
` 
  
const SNavLink = styled(NavLink)`
text-decoration: none ;
margin: 25px;
color: #3AB747 ;
 &.active {
    color: red;
  }

`

const Layout = () => {
  return (
<SLayout>
<Header>
<SNavLink to="/" > Home </SNavLink>
<SNavLink to="blog">Blog</SNavLink>
<SNavLink to="about">About</SNavLink>
</Header>
<Outlet/>
<Footer>2022</Footer>
</SLayout>
  );
};

export {Layout} ;
