import React from "react"
import Footer from "../Components/footer/Footer"
import { Layout } from "../Components/Layout/Layout"
import { Navbar } from "../Components/Navbar/Navbar"
import Home from "../Components/Home/Home"
import "../css/main.css"

function index() {
  return (
    <Layout fullpage={true}>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </Layout>
  )
}

export default index
