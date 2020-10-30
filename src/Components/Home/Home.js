import React, { useState, useEffect } from "react"
import { Text, Line, Container } from "./HomeElements"

const Typewriter = async (word, setText) => {
  let index = 0
  let currentText = ""

  return await new Promise(resolve => {
    const Interval = setInterval(() => {
      currentText = word.slice(0, ++index)
      setText({ text: currentText, writing: true })
      if (word.length == currentText.length) {
        resolve(setText({ text: currentText, writing: false }))
        clearInterval(Interval)
      }
    }, 150)
  })
}

function Home() {
  const [singer, setSinger] = useState({ text: "", writing: true })
  const [producer, setProducer] = useState({ text: "", writing: false })

  useEffect(() => {
    ;(async () => {
      console.log(Typewriter("Singer", setSinger))
      await Typewriter("Singer", setSinger)
      await Typewriter("Producer", setProducer)
      setProducer({ text: "Producer", writing: true })
    })()
  }, [])

  return (
    <Container>
      <Text>
        {singer.text}
        {singer.writing ? <Line></Line> : null}
      </Text>
      <br></br>
      <Text>
        {producer.text}
        {producer.writing ? <Line></Line> : null}
      </Text>
    </Container>
  )
}

export default Home
