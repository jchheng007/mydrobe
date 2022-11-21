/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./layout/header"
import "./layout.css"
import NavBar from "./NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import WardrobePage from "../pages/WardrobePage.js"
import OutfitGenerator from "./section/WardrobePageSections/OutfitGenerator"
import WardrobeContent from "./section/WardrobePageSections/WardrobeContent"

const layout = ({children}) => {
  return (
    <div>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WardrobePage/" element={<WardrobePage children={<div><WardrobeContent /></div>} />} />
        <Route path="/WardrobePage/outfitgen/" element={<WardrobePage children={<div><OutfitGenerator /></div>} />} />
        {console.log("hell")
        }
        </Routes>
    </div>
  )
}

export default layout