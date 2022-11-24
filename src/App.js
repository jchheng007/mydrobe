import React from "react"
import Layout from "./components/layout"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import NavSideBar from "./components/NavSideBar"
import WardrobePage from "./pages/WardrobePage"
import OutfitGenerator from "./components/section/WardrobePageSections/OutfitGenerator"
import WardrobeContent from "./components/section/WardrobePageSections/WardrobeContent"

import { Amplify, API, graphqlOperation} from "aws-amplify"
import * as mutations from "./graphql/mutations"
import awsConfig from "./aws-exports"
import AuthModal from './components/Modals/AuthModal'


export default function App() {

    Amplify.configure(awsConfig)
  const todoObject = {
    name: "supermarket spree",
    description: "Go to the supermarket",
  }

async function createSome() {
    try {
        await API.graphql({query: mutations.createTodo, variables: {input: todoObject}});
        console.log("todod created")
    } catch (err) {
      alert(err)
      console.log("err", err)
    }
  }

  return (
    <>

      <Layout >
      </Layout>
    </>
  )
}

