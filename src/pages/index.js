import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SEO from '../components/seo'
import Link from '@material-ui/core/Link'

import gitHubIcon from '../assets/github-logo.png'
import linkedInIcon from '../assets/linkedin-logo.png'
import upworkIcon from '../assets/upwork-logo.png'

const useStyles = makeStyles(theme => ({
  grid: { minHeight: '80vh' },
  paper: {
    padding: '20px 50px 8px 50px',
    backgroundColor: '#eaeaea',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
    width: 175,
    height: 175,
    border: '3.3px solid #ffffffd1;',
    boxShadow: '1.5px 1px 7px 0px #757575',
  },
  informationSection: {
    fontFamily: 'Verdana, monospace',
    fontSize: '0.8em',
    display: 'flex',
    color: '#383838',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const Hero = ({ classes }) => {
  const githubImageLink =
    'https://avatars0.githubusercontent.com/u/13531067?s=460&v=4'

  return (
    <Avatar className={classes.avatar}>
      <img alt="Eduardo Pereira" src={githubImageLink}></img>
    </Avatar>
  )
}

const WhoAmI = ({ classes }) => {
  return (
    <>
      <div className={classes.informationSection}>
        <h1 style={{ marginBlockEnd: '0.1em' }}>Eduardo G. S. Pereira</h1>
        <h2 style={{ marginBlockStart: '0.1em' }}>Software Engineer</h2>
      </div>
    </>
  )
}

const ContactIcon = ({ link, label, icon }) => (
  <Link href={link} target="_blank">
    <IconButton label={label} size="small">
      <img alt={label} style={{ height: '20px' }} src={icon} />
    </IconButton>
  </Link>
)

const ContactMe = () => {
  return (
    <div>
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
    </div>
  )
}

const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Home" />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Paper className={classes.paper} elevation={7}>
          <Hero classes={classes} />
          <WhoAmI classes={classes} />
          <ContactMe />
        </Paper>
      </Grid>
    </>
  )
}

export default HomePage
