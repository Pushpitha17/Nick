import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 100px;
  /* background-color: grey; */
  height: ${({ fullpage }) => (fullpage ? "100vh" : "auto")};

  @media screen and (max-width: 960px) {
    grid-template-rows: 80px auto 120px;
  }
`
