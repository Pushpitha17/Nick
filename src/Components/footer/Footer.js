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
            <FooterLink href="#" target="_blank">
              <FooterLinkContainer>
                <AiFillInstagram></AiFillInstagram>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink
              href="https://www.youtube.com/channel/UCC5NPVVnatGWNSZq36e-EZQ"
              target="_blank"
            >
              <FooterLinkContainer>
                <AiFillYoutube></AiFillYoutube>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink href="#" target="_blank">
              <FooterLinkContainer>
                <FaSoundcloud></FaSoundcloud>
              </FooterLinkContainer>
            </FooterLink>
            <FooterLink href="#" target="_blank">
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
