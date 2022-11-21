import React, { useState } from 'react'
import styled from 'styled-components'
import plusIcon from "../../../images/icon/plusIcon.svg"

export default function FAQSection() {

    const [isOpen, setOpen] = useState(false);

function sayHello() {
    console.log("Say hello")
}

return(
    <Wrapper>
        <Title>Frequently asked questions </Title>
        <QuestionsWrapper>
        <Question gap="660px;">
            <QuestionText>
                What is mydrobe?
            </QuestionText>
               <Button onClick={() => sayHello()}> 
                <Icon src={plusIcon} />
               </Button>
        </Question>
        <Rectangle />

        <Question gap="395px;">
            <QuestionText>
                How do I add clothes to mydrobe?
            </QuestionText>
            <Button onClick={() => sayHello()}> 
                <Icon src={plusIcon} />
               </Button>
        </Question>
        <Rectangle />

        <Question gap="330px;">
            <QuestionText>
                Can I sell my clothes on this platform?
            </QuestionText>
            <Button onClick={() => sayHello()}> 
                <Icon src={plusIcon} />
               </Button>
        </Question>
        <Rectangle />


        </QuestionsWrapper>
    </Wrapper>

)    
}

const Wrapper = styled.div`
position: absolute;
display: grid;
grid-template-rows: repeat(2, auto);
gap: 60px;
top: 2838px;
height: 408px;
width: 100%;
place-items: center;
`

const Title = styled.h2`
font-family: "SF Pro Display";
font-weight: 700;
font-size: 40px;
line-height: 48px;
`

const QuestionsWrapper = styled.div`
display: grid;
grid-template-rows: repeat(6, auto);
gap: 30px;
width: 1005px;
height: 300px;

`

const Question= styled.div`
display: grid;
grid-template-columns: repeat(2,auto);
align-items: start;
width: 1005px;
height: 48px;
justify-content: space-between;

`
const QuestionText = styled.h2`
font-family: "SF Pro Display";
font-style : normal;
font-weight: 400;
font-size: 40px;
line-height: 48px;
`

const Icon = styled.img`
height: 40px;
width: 35px;
`

const Rectangle = styled.div`
width: 1005px;
height: 2px;
background: black;
`

const AnswerWrapper = styled.p`
font-family: "SF Pro Text";
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: black;
`

const Button = styled.button`

color: transparent; 
background-color: transparent; 
border-color: transparent; 
border: none;

:hover {
    cursor: pointer;
}
`