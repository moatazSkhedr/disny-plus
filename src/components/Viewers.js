import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='images/viewers-disney.png' />
        </Wrap>
        <Wrap>
            <img src='images/viewers-marvel.png' />
        </Wrap>
        <Wrap>
            <img src='images/viewers-national.png' />
        </Wrap>
        <Wrap>
            <img src='images/viewers-pixar.png' />
        </Wrap>
        <Wrap>
            <img src='images/viewers-starwars.png' />
        </Wrap>
    </Container>
  )
}
const Container = styled.div`
    margin-top:40px;
    margin-left:5px;
    margin-right:5px;
    display:flex;
    cursor:pointer;
`
const Wrap = styled.div`
margin:10px;
border : 3px solid rgba(249 , 249 , 249 , 0.1); 
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    cursor:pointer;
    object-fit:cover;
}
&:hover{
    box-shadow:rgb(0 0 0 / 8%)0px 48px 58px -16px ,
    rgb(0 0 0 / 72% ) 0px 30px 22px -10px;
    transform:scale(1.06);
    border-color:rgba(249 , 249 , 249 , 0.9);
}
`