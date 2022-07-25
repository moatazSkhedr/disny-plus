import React from 'react'
import styled from "styled-components";
import Detail from './Detail';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


export default function Header() {
 

  return (
    
    <div>
         
        <Container>
          <Logo src="images\logo.svg" />
          <Menu>
              <a>
                <img src='images/home-icon.svg' alt=''/>
                <span>Home</span>
                </a>
              <a>
                <img src='images/search-icon.svg' />
                <span>Search</span>
              </a>
              <a>
                <img src='images/watchlist-icon.svg' />
                <span>WatchList</span>
              </a>
              <a>
                <img src='images/original-icon.svg' />
                <span>Original</span>
              </a>
              <a>
                <img src='images/movie-icon.svg' />
                <span>Movies</span>
              </a>
              <a>
                <img src='images/series-icon.svg' />
                <span>Series</span>
              </a>
          </Menu>
          <Portifolio src ="images/mo-salah.jfif" />
        </Container>
    </div>
  )
}
const Container = styled.div`
  height:70px;
  background-color:#090b13;
  display:flex;
  align-items:center;
  padding: 0 30px;
  color:white;
  overflow-x :hidden;
  margin-bottom:0px;
`
const Logo = styled.img`
  width:80px;
  cursor:pointer
`
const Menu = styled.div`
  display:flex;
  flex:1;
  padding: 0 10px;
  cursor:pointer;

  a{
    display:flex;
    align-items:center;
    padding:15px;
    justify-content:center;
    img{
      height:20px
    }  
    span{
      font-size:14px;
      letter-spacing:1.42px;
    }
  
  }
  a:hover{
    color:yellow;
  }



`
const Portifolio = styled.img`
width:50px;
hegiht:50px;
border-radius:50%;
cursor :pointer;
`