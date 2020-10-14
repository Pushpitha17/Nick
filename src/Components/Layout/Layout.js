import React from "react"
import { Grid } from "./LayoutElements"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const Layout = ({ children, fullpage }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "greybg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <Grid fullpage={fullpage}>{children}</Grid>
      </BackgroundImage>
    </>
  )
}
