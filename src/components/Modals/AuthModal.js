import React, { useEffect, useRef, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import xIcon from "../../images/icon/xIcon.svg"
import { signingUp } from "../../App"
import useUser, { initialState, UserContext } from "../../contexts/UserContext"

export default function AuthModal({ closeModal }, props) {
  const {userEmail, signingIn, signingUp, confirmSignUp } = useUser()
  const user = localStorage.getItem('user')
  const { signIn = 0, signUp = 1, confirmation = 2, session = 3 } = props

  const [authState, setAuthState] = useState(!user ? signIn : session)
  return (
    <Overlay onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalWrapper>
          <Icon src={xIcon} onClick={closeModal} />

          {authState == signIn && (
            <SignInModal
              authState={setAuthState}
              back={signUp}
              signingIn={signingIn}
            />
          )}

          {authState == signUp && (
            <SignUpModal
              authState={setAuthState}
              back={signIn}
              forward={confirmation}
              signingUp={signingUp}
              userEmail={userEmail}
            
            />
          )}

          {authState == confirmation && (
            <ConfirmationModal
              authState={setAuthState}
              back={signUp}
              confirmSignUp={confirmSignUp}
             
             
            />
          )}
          {authState == session && <ProfileModal user={user}/>}
        
        </ModalWrapper>
      </ModalContainer>
    </Overlay>
  )
}

const SignInModal = ({ authState, back, signingIn }) => {
  const emailRef = useRef()
  const passRef = useRef()
  return (
    <>
      <ModalTitle>Sign In</ModalTitle>
      <InputWrapper>
        <InputTitle>Email</InputTitle>
        <TextField ref={emailRef} type="text"></TextField>
        {/* <i style={{marginTop: '-40px', marginLeft: '325px'}}>helo</i> */}
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Password</InputTitle>
        <TextField ref={passRef} type="password"></TextField>
      </InputWrapper>
      <Wrapper>
        <Title onClick={() => authState(back)}>Don't have an account?</Title>
        <Title>Forgot Password?</Title>
      </Wrapper>

      <Button
        onClick={() => signingIn(emailRef.current.value, passRef.current.value)}
      >
        Sign in
      </Button>
    </>
  )
}

const SignUpModal = ({ authState, back, forward, signingUp, userEmail }) => {
  const firstRef = useRef()
  const lastRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()

  return (
    <>
      <ModalTitle>Sign up</ModalTitle>
      <InputWrapper>
        <InputTitle>First name</InputTitle>
        <TextField ref={firstRef} type="text"></TextField>
        {/* <i style={{marginTop: '-40px', marginLeft: '325px'}}>helo</i> */}
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Last name</InputTitle>
        <TextField ref={lastRef} type="text"></TextField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Email</InputTitle>
        <TextField ref={emailRef} type="text"></TextField>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Password</InputTitle>
        <TextField ref={passwordRef} type="password"></TextField>
      </InputWrapper>
      <ButtonContainer>
        <Button onClick={() => authState(back)}>Back</Button>
        <Button
          onClick={() => {
            userEmail(emailRef.current.value)
            authState(forward)
            signingUp(
              firstRef.current.value,
              lastRef.current.value,
              emailRef.current.value,
              passwordRef.current.value
            )
          }
         
        }
        >
          Sign up
        </Button>
      </ButtonContainer>
    </>
  )
}

const ConfirmationModal = ({ authState, back, confirmSignUp}) => {

  const confirmRef = useRef()
  const {email} = useUser()


  return (
    <>
      <ModalTitle>Confirmation</ModalTitle>
      <Title>Verification code has been sent to</Title>

      <TextField ref={confirmRef} type="text"></TextField>
     
      <ButtonContainer>
        <Button onClick={() => {
        authState(back)
      
        }}>Back</Button>
        <Button onClick={() => {
         confirmSignUp(email, confirmRef.current.value)
  }} style={{ background: "#F27A7D" }}>Confirm</Button>
      </ButtonContainer>
    </>
  )
}

const ProfileModal = ({user}) =>{ 

  const signedInUser = JSON.parse(user)
  
  return (
  <>
    <ModalTitle>Welcome, {signedInUser.firstName}</ModalTitle>
    <Title>We hope you find our platform useful!</Title>
    <Button style={{ background: "#F27A7D" }}>Sign out</Button>
  </>
)
}

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 100%;
  height: 100%;
`

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
`

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
