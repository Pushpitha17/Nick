import React from "react"
import { Layout } from "../Components/Layout/Layout"
import { Navbar } from "../Components/Navbar/Navbar"
import Footer from "../Components/footer/Footer"
import About from "../Components/about/About"

function about() {
  return (
    <Layout fullpage={true}>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </Layout>
  )
}

export default about
