import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
// import IconButton from '@material-ui/core/IconButton'
import SEO from '../components/seo'
// import MaterialLink from '@material-ui/core/Link'

import gitHubIcon from '../assets/github-logo.png'
import linkedInIcon from '../assets/linkedin-logo.png'
import upworkIcon from '../assets/upwork-logo.png'

// const githubImageLink =
//   'https://avatars0.githubusercontent.com/u/13531067?s=460&v=4'

const Card = ({ children }) => {
  const cardStyle = {
    backgroundColor: '#f9f7f7',
    padding: '20px 50px 8px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px white',
    borderRadius: '2%',
    boxShadow: 'rgb(169, 169, 169) 1px 1px 10',
  }

  return <div style={cardStyle}>{children}</div>
}

const Hero = () => {
  const avatarStyle = {
    margin: 10,
    width: 175,
    height: 175,
    boxShadow: '1.5px 1px 7px 0px #757575',
  }

  return (
    <div style={avatarStyle}>
      <div>Teste</div>
      {/* <img alt="Eduardo Pereira" src={githubImageLink}></img> */}
    </div>
  )
}

const WhoAmI = () => {
  const sectionStyle = {
    fontFamily: 'Verdana, monospace',
    fontSize: '0.8em',
    display: 'flex',
    color: '#383838',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <>
      <section style={sectionStyle}>
        <h1 style={{ marginBlockEnd: '0.1em' }}>Eduardo Pereira</h1>
        {/* <h3 style={{ marginBlockStart: '0.1em' }}>Software Engineer</h3> */}
      </section>
    </>
  )
}

const ContactIcon = ({ link, label, icon }) => (
  <a href={link} target="_blank">
    <div label={label} size="small">
      <div>Teste</div>
      {/* <img alt={label} style={{ height: '20px' }} src={icon} /> */}
    </div>
  </a>
)

const ContactMe = () => {
  return (
    <div>
      {/* <ContactIcon
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
      /> */}
    </div>
  )
}

const Container = ({ children }) => {
  const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    boxSizing: 'borderBox',
  }

  return <div style={containerStyle}>{children} </div>
}

const HomePage = () => {
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Card>
          <Hero />
          <WhoAmI />
          <ContactMe />
        </Card>
        <p>
          Check the link <a href="/random-link">click here!!</a>
        </p>
      </Container>
    </>
  )
}

export default HomePage
