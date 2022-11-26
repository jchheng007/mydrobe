import React, { useReducer } from "react"
import Layout from "./components/layout"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import NavSideBar from "./components/NavSideBar"
import WardrobePage from "./pages/WardrobePage"
import OutfitGenerator from "./components/section/WardrobePageSections/OutfitGenerator"
import WardrobeContent from "./components/section/WardrobePageSections/WardrobeContent"

import { Auth, Amplify, API, graphqlOperation, Hub, Logger} from "aws-amplify"
import * as mutations from "./graphql/mutations"
import awsConfig from "./aws-exports"
import AuthModal from './components/Modals/AuthModal'
import {UserProvider} from "./contexts/UserContext"

Amplify.configure(awsConfig)

export  async function signingUp (given_name, family_name, email, password)  {
  try {
    await Auth.signUp({username: email, password, attributes:{given_name, family_name, email}});
     console.log("From app.js", given_name, family_name, email, password)
  console.log("creating account")
  } catch (err) {
      console.log("Sign up did not complete", err)
  }
};

export async function confirmSignUp(email, code) {
  try {
      await Auth.confirmSignUp(email, code);
      console.log(`confirmaition from app.js ${email} amd ${code}`)
      
  } catch (err) {
      console.log('error in the confirmSignUp', err)
  }

}

export async function signingIn(email, password) {
  try 
  {
    // const user = await Auth.signIn(email, password);
     console.log("user email & password in app.js ", email, password)
   
    const user = {
      firstName : "jayson",
      lastName: "chheng"
    }

    console.log("user signing in  app.js ", user)
    localStorage.setItem('user', JSON.stringify(user))

    return user
  } catch (err) {
    console.log("error in the signIn", err)
  }
}


export async function signingOut() {
  try {

  } catch (err) {
    console.log("Could not complete signingout from app.js", err)
  }
}
export default function App() {

   
   
    




  return (
    <>
      <UserProvider>
      <Layout >
      </Layout>
      </UserProvider>
    </>
  )
}


