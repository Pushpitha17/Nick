import styled from "styled-components"

export const FormContainer = styled.div`
  width: 640px;
  background-color: #ecf0f1;
  opacity: 0.95;
  margin: auto auto;
  padding: 50px 0;
  border-radius: 3px;
  @media screen and (max-width: 960px) {
    width: 90%;
    padding: 40px 20px;
  }
`
export const Heading = styled.h2`
  font-family: "Ubuntu", sans-serif;
  width: 80%;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`
