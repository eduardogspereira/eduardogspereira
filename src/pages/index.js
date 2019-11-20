import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'

import gitHubIcon from '../assets/github-logo.png'
import linkedInIcon from '../assets/linkedin-logo.png'
import upworkIcon from '../assets/upwork-logo.png'

const githubImageLink =
  'https://avatars0.githubusercontent.com/u/13531067?s=460&v=4'

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Card = styled.div`
  background-color: #f9f7f7;
  padding: 20px 50px 8px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px white;
  border-radius: 2%;
  box-shadow: rgb(169, 169, 169) 1px 1px 10;
`

const Hero = styled.img`
  width: 175px;
  height: 175px;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0.5px 0px 5px 0px #757575;
`

const Section = styled.section`
  align-items: center;
  color: #383838;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const Title = styled.h1`
  margin-block-end: 0px;
`

const SubTitle = styled.h3`
  margin-block-start: 5px;
`

const WhoAmI = () => (
  <Section>
    <Title>Eduardo Pereira</Title>
    <SubTitle>Software Engineer</SubTitle>
  </Section>
)

const ContactLink = styled.a``
const ContactImage = styled.img`
  height: 20px;
`
const ContactWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
`

const ContactIcon = ({ link, label, icon }) => (
  <ContactLink href={link} target="_blank">
    <ContactImage alt={label} src={icon} />
  </ContactLink>
)

const ContactMe = () => (
  <ContactWrapper>
    <ContactIcon
      link="https://github.com/eduardogspereira"
      label="github"
      icon={gitHubIcon}
    />
    <ContactIcon
      link="https://www.linkedin.com/in/eduardogspereira/"
      label="linkedin"
      icon={linkedInIcon}
    />
    <ContactIcon
      link="https://www.upwork.com/fl/eduardogspereira"
      label="upwork"
      icon={upworkIcon}
    />
  </ContactWrapper>
)

const PageSectionsWrapper = styled.section`
  height: 30px;

  & > a {
    color: #4f4f4f;
    font-weight: 600;

    &:hover {
      color: #1c1c1c;
    }
  }
`

const PageSections = () => {
  return (
    <PageSectionsWrapper>
      <Link to="/blog">/blog</Link>
    </PageSectionsWrapper>
  )
}

const HomePage = () => {
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Card>
          <Hero alt="Eduardo Pereira" src={githubImageLink} />
          <WhoAmI />
          <PageSections />
          <ContactMe />
        </Card>
      </Container>
    </>
  )
}

export default HomePage
