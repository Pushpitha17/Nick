import React from "react"
import { Layout } from "../Components/Layout/Layout"
import Form from "../Components/form/Form"
import { Navbar } from "../Components/Navbar/Navbar"
import Footer from "../Components/footer/Footer"

function connect() {
  return (
    <Layout fullpage={true}>
      <Navbar></Navbar>
      <Form></Form>
      <Footer></Footer>
    </Layout>
  )
}

export default connect
