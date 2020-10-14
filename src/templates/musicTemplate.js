import React from "react"
import Footer from "../Components/footer/Footer"
import { Layout } from "../Components/Layout/Layout"
import { Video, VideoContainer } from "../Components/music/VideoElements"
import { Navbar } from "../Components/Navbar/Navbar"

function musicTemplate({ pageContext: { data } }) {
  console.log(data)
  return (
    <Layout fullpage={false}>
      <Navbar></Navbar>
      <VideoContainer>
        {data.map((item, index) => (
          <Video key={index}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item[1]}`}
              srcDoc={`<style>
          *{padding:0;margin:0;overflow:hidden}
          html,body{height:100%}
          img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
          span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
          </style>
          <a href=https://www.youtube.com/embed/${item[1]}?autoplay=1>
          <img src=${item[0]} alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'>
          <span>▶</span>
          </a>`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Video>
        ))}
      </VideoContainer>
      <Footer></Footer>
    </Layout>
  )
}

export default musicTemplate
