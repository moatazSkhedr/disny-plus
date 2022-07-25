import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
export default function Movies() {
    const movies = useSelector(selectMovies);
    // console.log(`th e=> ${movies}`);

  return (
    <Container>
        <h3>Recommended For You</h3>
        <Content>
            {movies && 
            movies.map((movie)=>{
                return(
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                        <img src={movie.one} alt=''/>
                        </Link>
                </Wrap>
    
                )

            })
            }

        </Content>
    </Container>
  )
}
const Container = styled.div`
    height:100vh;
    margin-left:16px;
    margin-top:50px;
    margin-right:30px;
    // overflow:hidden;
    scroll:none;
    margin-bottom:100px;

    `
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4 , minmax(0 , 1fr));
`
const Wrap = styled.div`
border-radius:10px;
overflow:hidden;
cursor:pointer;
border: 3px solid rgba(249 , 249 , 249 , 0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
rgb(0 0 0 / 72% ) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.06);
        border-color:rgba(249 , 249 , 249 , 0.8);
    }

`