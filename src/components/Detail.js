import React ,{useEffect , useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import db from '../firebase';
function Detail() {
  const {id} = useParams();
  const [movie , setMovie] = useState("");
  useEffect(()=>{
    db.collection("movies").doc(id).get().then((doc)=>{
      if(doc.exists){
        setMovie(doc.data());
      }else{

      }
    })
  }, [id])
  console.log(id);
  return (
    <Container>
      <Background>
        <img src={movie.backgroun} alt=''/>
      </Background>

       <ImageTitle>
        <img src='images/walt_disney_PNG10.png' alt='' />
      </ImageTitle> 
      <Controls>
      <PlayButton>
          <img src='images/play-icon-black.png' alt='' />
          <span>PLAY</span>
      </PlayButton>
      <TrailerButton>
      <img src='images/play-icon-white.png' alt='' />
          <span>TRAILER</span>
      </TrailerButton>
      <AddButton>
        <span>+</span>
      </AddButton>
      <GroupButton>
        <img src='images/group-icon.png' alt='' />
      </GroupButton>
      </Controls>
      <SubTitle>
        2022 .7m . Family , Fantasy , Kids , Animation
      </SubTitle>
      <Description>
      A Chinese Mom who's sad when her grown som leaves home gets another chance at motherhood when one of her dumplings springs to life but she finds that rnothing stays cute and small forever
      </Description>
    </Container>
  )
}

export default Detail;


const Container = styled.div`

  min-height:calc(100vh -70px);
  padding: 0 calc(3.5vw - 5px);
  position:relative;
`
const Background = styled.div`
opacity:0.8;
left:0;
right:0;
top:0;
position:fixed;
z-index:-1;
bottom:0;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
   
  }
  
`
const ImageTitle = styled.div`
  height:30vh;
  min-height:170px;
  width:35vw;
  min-width:200px;
  margin-bottom:50px;
  
  img{
    width:100%;
    heigth:100%;
    object-fit:contain;
  }
`
const Controls = styled.div`
align-items:center;
display:flex;
`
const PlayButton = styled.button`
  border-radius:4px;
  font-size:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:50px;
  background:rgb(249 , 249 , 249);
  border:none;
  padding:0px 24px;
  margin-right:22px;
  letter-spacing:1.8px;
  cursor:pointer;
  &:hover{
    background:rgb(198 , 198 , 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background:rgba(0 , 0 , 0 , 0.3);
  border:1px solid rgb(249 , 249 , 249);
  color:rgb(249 , 249 , 249);
  
`
const AddButton = styled.button`
  width:44px;
  height:44px;
  diplay:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border : 2px solid white;
  background-color:rgba(0 , 0 , 0 , 0.6);
  cursor:pointer;
  margin-right:16px;
  span{
    font-size:26px;
    color:white;
  }


`
const GroupButton = styled(AddButton)`
  display:flex;
  background:(0 , 0 , 0);
  
`
const SubTitle = styled.div`
  color:rgb(249 , 249 , 249);
  font-size:15px;
  min-height:20px;
  margin-top:26px;
`
const Description = styled.div`
  max-widht:750px;
  line-height:1.4;
  font-size:20px;
  margin-top:16px;
  color:rgb(249 , 249 , 249);
`
