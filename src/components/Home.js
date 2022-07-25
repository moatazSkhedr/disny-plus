import React,{useEffect}  from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

export default function Home() {
  const dispacth = useDispatch();
  useEffect(()=>{
    console.log("hello ")
    db.collection("movies").onSnapshot((snap)=>{
      // console.log(snap);
      let tempMovies = snap.docs.map((doc)=>{
        console.log(doc.data());
        return {id: doc.id , ...doc.data()}
      })
      dispacth(setMovies(tempMovies))
      // console.log(tempMovies)
    })
    // db.collection("movies").onSnapshoot((snap)=>{
    //   console.log(snap)
    // })
  } , [])

  
  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}


const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw , 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        content:"";
        background:url("/images/home-background.png") center center / cover no-repeat fixed;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`
