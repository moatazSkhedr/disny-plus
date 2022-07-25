import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
            <Background>
            <img src='images/login-background.jpg' alt=''/>
            </Background>
            <Logos>
                <LogoOne src="images/cta-logo-one.svg"  />
                <Button>
                    GET ALL THERE
                </Button>
                <Description>
                    Get gets another  chance at  chance at  chance at  chance at  chance at  chance at  chance at  chance at  chance at  chance at  chance at  chance at motherhood when one of her dumplings springs to life but she finds that rnothing stays cute and small forever
                </Description>
                <LogoTwo src="images/cta-logo-two.png" />
            </Logos>
        
   
    </Container>
  )
}

export default Login

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  
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
const Logos = styled.div`
max-width:650px;
display:flex;
flex-direction:column;
width:50%;

`
const LogoOne = styled.img`
    margin-bottom:10px;
    cursor:pointer;
`

const Button = styled.button`
    width:100%;
    padding:15px;
    background-color:#0063e5;
    color:white;
    font-size:18px;
    letter-spacing:1.5px;
    margin-bottom:8px;
    cursor:pointer;
    font-weight:bold;
    border-radius:4px;
    transition:all 250ms;
    &:hover{
        background-color:#0483ee;
    }
`
 const Description = styled.div`
    font-size:12px;
    letter-spacing:1.7;
    text-align:center;
    padding:10px;
    line-height:1.5;
`
const LogoTwo = styled(LogoOne)`
margin-top:16px;

`