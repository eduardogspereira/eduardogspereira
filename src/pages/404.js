import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import 'normalize.css'

import AliceLost from '../assets/alice-in-wonderland.jpg'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: blue;
  z-index: 0;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  height: 681px;
  width: 500px;
  border-radius: 3%;
  box-shadow: 1px 1px 10px 2px #757575;
`

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <Main>
        <Img alt="Alice Lost in Wonderland" src={AliceLost} />
      </Main>
    </>
  )
}

export default NotFoundPage
