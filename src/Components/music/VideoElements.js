import styled from "styled-components"

export const VideoContainer = styled.div`
  margin: 0px 0px 50px;
  width: 100%;
`

export const Video = styled.div`
  width: 640px;
  height: 360px;
  margin: 75px auto 0;
  aspect-ratio: 16 / 9;
  max-width: 640px;

  @media screen and (max-width: 960px) {
    width: 360px;
    height: 220px;
  }
`
