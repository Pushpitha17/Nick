import React from "react"
import {
  FooterContainer,
  FooterEl,
  FooterLink,
  FooterLinkContainer,
  FooterLinks,
} from "./footerelements"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { FaFacebookF, FaSoundcloud } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

function Footer() {
  return (
    <FooterEl>
      <FooterContainer>
        <FooterLinks>
          <IconContext.Provider value={{ color: "#34495e", size: 20 }}>
            <FooterLink to="/">
              <FooterLinkContainer>
                <AiFillInstagram></AiFillInstagram>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink to="/">
              <FooterLinkContainer>
                <AiFillYoutube></AiFillYoutube>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink to="/">
              <FooterLinkContainer>
                <FaSoundcloud></FaSoundcloud>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink to="/">
              <FooterLinkContainer>
                <FaFacebookF></FaFacebookF>
              </FooterLinkContainer>
            </FooterLink>
          </IconContext.Provider>
        </FooterLinks>
      </FooterContainer>
    </FooterEl>
  )
}

export default Footer
