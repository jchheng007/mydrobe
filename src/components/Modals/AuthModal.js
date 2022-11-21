import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import xIcon from "../../images/icon/xIcon.svg"

export default function AuthModal(props) {

  const {signIn, signUp, signOut} = props
  const [authState, setAuthState] = useState(signIn)
  

  return (
    <ModalWrapper >
      <Icon src={xIcon} />
      
      {/* {authState && <SignInModal setAuthState={() => setAuthState(signUp)}/>}
      {authState != signIn && <SignUpModal setAuthState={() => setAuthState(signIn)}/>} */}
      <ProfileModal />
    
      

 
    </ModalWrapper>
  )
}

const SignInModal = ({setAuthState}) => (
  <>
    <ModalTitle>Sign In</ModalTitle>
    <InputWrapper>
      <InputTitle>Email</InputTitle>
      <TextField type="text"></TextField>
      {/* <i style={{marginTop: '-40px', marginLeft: '325px'}}>helo</i> */}
    </InputWrapper>
    <InputWrapper>
      <InputTitle>Password</InputTitle>
      <TextField type="password"></TextField>
    </InputWrapper>
    <Wrapper>
      <Title onClick={setAuthState}>Don't have an account?</Title>
      <Title>Forgot Password?</Title>
    </Wrapper>

    <Button>Sign in</Button>
   
  </>
)

const SignUpModal = ({setAuthState}) => (
  <>
    <ModalTitle>Sign up</ModalTitle>
    <InputWrapper>
      <InputTitle>First name</InputTitle>
      <TextField type="text"></TextField>
      {/* <i style={{marginTop: '-40px', marginLeft: '325px'}}>helo</i> */}
    </InputWrapper>
    <InputWrapper>
      <InputTitle>Last name</InputTitle>
      <TextField type="text"></TextField>
    </InputWrapper>
    <InputWrapper>
      <InputTitle>Email</InputTitle>
      <TextField type="text"></TextField>
    </InputWrapper>
    <InputWrapper>
      <InputTitle>Password</InputTitle>
      <TextField type="password"></TextField>
    </InputWrapper>
    <ButtonContainer>
    <Button onClick={setAuthState}>Back</Button>
    <Button>Sign up</Button>
    </ButtonContainer>
 
  </>
)

const ProfileModal = () => (
  <>
  <ModalTitle>Welcome, Jayson</ModalTitle>
  <Title>We hope you find our platform useful!</Title>
  <Button style={{background: "#F27A7D"}}>Sign out</Button>
  </>
)

const ModalWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: grid;
  grid-template-rows: repeat(6, auto);
  align-items: start;
  padding: 10px 20px;
  gap: 30px;

  width: 412px;
  

  background: #eee9d6;
  border: 1px solid #000000;
  border-radius: 14px;
`

const Icon = styled.img`
  width: 24px;
  height: 24px;

  :hover {
    cursor: pointer;
    box-shadow: 0 0.4em 0.4em -0.4em;
  }
`

const ModalTitle = styled.h3`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`
const InputTitle = styled.p`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`

const Title = styled.p`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  :hover {
    cursor: pointer;

    transform: translateY(-0.2em);
  }
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: start;
  padding: 0px;
  gap: 15px;

  width: 372px;
  height: 77px;
`

const TextField = styled.input`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: 372px;
  height: 34px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 14px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  text-indent: 1em;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: start;
  padding: 0px;
  gap: 15px;

  width: 170px;
  height: 51px;
`

const Button = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding: 10px;
  justify-items: center;

  width: 70px;
  background: #000000;
  border-radius: 14px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: white;

  :hover {
    cursor: pointer;
    box-shadow: 0 0.4em 0.4em -0.4em;
    transform: translateY(-0.2em);
  }
`
const ButtonContainer = styled.div`

display: grid;
grid-template-columns: repeat(2, auto);
align-items: flex-start;
padding: 0px;
gap: 200px;

width: 371px;
height: 38px;
`