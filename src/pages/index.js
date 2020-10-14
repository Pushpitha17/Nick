import React from "react"
import Footer from "../Components/footer/Footer"
import { Layout } from "../Components/Layout/Layout"
import { Navbar } from "../Components/Navbar/Navbar"
import "../css/main.css"

export default function Home() {
  return <Layout fullpage={true}>
    <Navbar></Navbar>
    <div>
    </div>
    <Footer></Footer>
  </Layout>

}
