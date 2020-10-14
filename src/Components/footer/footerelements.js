import styled from "styled-components"
import { Link } from "gatsby"

export const FooterEl = styled.footer`
  width: 100%;
`

export const FooterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: center;
`

export const FooterLink = styled(Link)`
  color: #7f8c8d;
  margin: 0 12px;
`
export const FooterLinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px;
  border: 3px #34495e solid;
  border-radius: 50%;
  background-color: #ecf0f1;

  svg {
  }
`
