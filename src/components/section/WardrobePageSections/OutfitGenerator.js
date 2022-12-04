import React, { useState } from "react"
import styled from "styled-components"
import outfitIcon from "../../../images/icon/outfitIcon.svg"
import OutfitCardComponent from "../../card/OutfitCardComponent"
import weatherIcon from "../../../images/icon/weatherIcon.svg"
import weatherBackground from "../../../images/background/weatherBackground.svg"
import loveIcon from "../../../images/icon/loveIcon.svg"
import loveBackground from "../../../images/background/loveBackground.svg"
import movieIcon from "../../../images/icon/movieIcon.svg"
import movieBackground from "../../../images/background/movieBackground.svg"
import handshakeIcon from "../../../images/icon/handshakeIcon.svg"
import businessBackground from "../../../images/background/businessBackground.svg"
import questionMarkIcon from "../../../images/icon/questionMarkIcon.svg"
import dressingBackground from "../../../images/background/dressingBackground.svg"
import celebrationIcon from "../../../images/icon/celebrationIcon.svg"
import celebrationBackground from "../../../images/background/celebrationBackground.svg"
import beachBackground from "../../../images/background/beachBackground.svg"
import beachIcon from "../../../images/icon/beachIcon.svg"
import OutfitModal from "../../Modals/OutfitModal"
import { Storage } from "aws-amplify"
// import top from "../../../images/clothes/top.jpeg"
// import bottom from "../../../images/clothes/bottom.jpeg"
// import shoe from "../../../images/clothes/shoe.jpeg"
import { useCookies } from "react-cookie"
export default function OutfitGenerator() {
  const [isOpenModal, setOpenModal] = useState()
  const [cookies, setCookie] = useCookies(["user"])
  const userid = cookies.userId

  const [top, setTop] = useState([])
  const [bottom, setBottom] = useState([])
  const [shoes, setShoes] = useState([])

  async function generateTop(arr) {
    const topType = arr[Math.floor(Math.random() * arr.length)]
    let imageKeys = await Storage.list(topType, { level: "protected" })
    console.log("imagekeys before", imageKeys)
    imageKeys = await Promise.all(
      Object.values(imageKeys.results).map(async value => {
        console.log("what is k?", value.key)
        const imageUrl = await Storage.get(value.key, {
          level: "protected",
        })
        return imageUrl
      })
    )
    let store = []
    const selectKey = imageKeys.map(item => store.push(item))
    console.log(
      "sstore random",
      store[Math.floor(Math.random() * store.length)]
    )
    setTop(store[Math.floor(Math.random() * store.length)])
  }

  async function generateBottom(arr) {
    const bottomType = arr[Math.floor(Math.random() * arr.length)]
    let imageKeys = await Storage.list(bottomType, { level: "protected" })
    console.log("imagekeys before", imageKeys)
    imageKeys = await Promise.all(
      Object.values(imageKeys.results).map(async value => {
        console.log("what is k?", value.key)
        const imageUrl = await Storage.get(value.key, {
          level: "protected",
        })
        return imageUrl
      })
    )
    let store = []
    const selectKey = imageKeys.map(item => store.push(item))
    console.log(
      "sstore random",
      store[Math.floor(Math.random() * store.length)]
    )
    setBottom(store[Math.floor(Math.random() * store.length)])
  }

  async function generateShoes(arr) {
    const shoeType = arr[Math.floor(Math.random() * arr.length)]
    let imageKeys = await Storage.list(shoeType, { level: "protected" })
    console.log("imagekeys before", imageKeys)
    imageKeys = await Promise.all(
      Object.values(imageKeys.results).map(async value => {
        console.log("what is k?", value.key)
        const imageUrl = await Storage.get(value.key, {
          level: "protected",
        })
        return imageUrl
      })
    )

    let store = []
    const selectKey = imageKeys.map(item => store.push(item))
    console.log(
      "sstore random",
      store[Math.floor(Math.random() * store.length)]
    )
    setShoes(store[Math.floor(Math.random() * store.length)])
  }

  function getShoeIcon() {
    setShoes("")
  }

  const generator = [
    {
      title: "weather",
      topArr: ["TOP/SWEATERS/", "TOP/SWEATSHIRT_HOODIES/"],
      bottomArr: ["BOTTOM/JEANS"],
      shoesArr: ["SHOES/SNEAKERS"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    },

    {
      title: "dates",
      topArr: ["TOP/FLANNELSHIRTS/"],
      bottomArr: ["BOTTOM/JEANS"],
      shoesArr: ["SHOES/SNEAKERS"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    }, 
    {
      title: "netflix&chill",
      topArr: ["TOP/TSHIRTS/", "TOP/ACTIVEWEAR/"],
      bottomArr: ["BOTTOM/UNDERWEAR", "BOTTOM/SHORTS", "BOTTOM/ACTIVEWEAR"],
      shoesArr: [""],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: getShoeIcon
    }, 
    {
      title: "business",
      topArr: ["TOP/POLOS/", "TOP/BUTTONDOWNSHIRTS/"],
      bottomArr: ["BOTTOM/DRESSPANTS"],
      shoesArr: ["SHOES/DRESS_SHOES", "SHOES/BOOTS"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    }, 
    {
      title: "random",
      topArr: ["TOP"],
      bottomArr: ["BOTTOM"],
      shoesArr: ["SHOES"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    }, 
    {
      title: "party",
      topArr: ["TOP/POLOS/", "TOP/BUTTONDOWNSHIRTS/"],
      bottomArr: ["BOTTOM/DRESSPANTS"],
      shoesArr: ["SHOES/DRESS_SHOES", "SHOES/BOOTS"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    }, 
    {
      title: "beach",
      topArr: ["TOP/TANKTOPS"],
      bottomArr: ["BOTTOM/SHORTS"],
      shoesArr: ["SHOES/SANDALS"],
      topGenerator: generateTop,
      bottomGenerator: generateBottom,
      shoesGenerator: generateShoes,
    }, 
  ]

  return (
    <Wrapper>
      <NavTitleWrapper>
        <img src={outfitIcon} />
        <NavTitle>Outfit Generator</NavTitle>
      </NavTitleWrapper>

      <ContentWrapper>
        <OutfitCardComponent
          icon={weatherIcon}
          title="Weather"
          description="IDK what to wear. But check that weather tho."
          background={weatherBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[0]}
        />
        <OutfitCardComponent
          icon={loveIcon}
          title="Dates"
          description="Trying to impress yo girl. I gotchu."
          background={loveBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[1]}
        />
        <OutfitCardComponent
          icon={movieIcon}
          title="Netflix & Chill"
          description="We're not even gonna watch the movie!"
          background={movieBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[2]}
        />
        <OutfitCardComponent
          icon={handshakeIcon}
          title="Business"
          description="It’s about to go down boys!"
          background={businessBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[3]}
        />
        <OutfitCardComponent
          icon={questionMarkIcon}
          title="Random"
          description="I can’t make up my mind."
          background={dressingBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[4]}
        />
        <OutfitCardComponent
          icon={celebrationIcon}
          title="Party"
          description="Let’s turn up!"
          background={celebrationBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[5]}
        />
        <OutfitCardComponent
          icon={beachIcon}
          title="Beach"
          description="Let’s go to beach!"
          background={beachBackground}
          showModal={() => {
            setOpenModal(true)
          }}
          top={top}
          bottom={bottom}
          shoes={shoes}
          generator={generator[6]}
        />
      </ContentWrapper>

      {isOpenModal && (
        <OutfitModal
          top={top}
          bottom={bottom}
          shoes={shoes}
          closeModal={setOpenModal}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 60px;
`

const NavTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 226px;
  height: 29px;
`

const NavTitle = styled.div`
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(341px, 1fr));
  gap: 50px;
  align-items: start;
  width: 100%;
`
