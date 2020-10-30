import styled from "styled-components"

export const Container = styled.div`
  display: inline-block;
  left: 40%;
  width: 60%;
  position: relative;
  margin: auto 0;
  text-align: left;

  @media screen and (max-width: 760px) {
    left: 10%;
    width: 90%;
    margin-top: 35%;
  }
`

export const Text = styled.p`
  font-size: 4rem;
  display: block;
  position: relative;
  font-family: "Ubuntu", sans-serif;
  color: #bdc3c7;
  font-weight: 700;

  @media screen and (max-width: 760px) {
  }
`

export const Line = styled.span`
  :after {
    content: "";
    margin-left: 8px;
    width: 2px;
    height: 64px;
    border-right: 2px solid white;
    animation: blink 1s infinite ease;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
