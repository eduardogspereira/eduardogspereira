import React from 'react'
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SEO from '../components/seo'

import AliceLost from '../assets/alice-in-wonderland.jpg'

const useStyles = makeStyles(theme => ({
  grid: { minHeight: '90vh' },
  informationSection: {
    fontFamily: 'Verdana, monospace',
    fontSize: '1em',
    fontWeight: 'bolder',
    display: 'flex',
    color: '#383838',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="404: Not found" />
      <Link to="/">random</Link>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <img
          style={{
            borderRadius: '10%',
            boxShadow: '1px 1px 10px 2px #757575',
          }}
          alt={'Alice Lost in Wonderland'}
          src={AliceLost}
        ></img>
        <div className={classes.informationSection}>
          <p>Page not found =^(</p>
        </div>
      </Grid>
    </>
  )
}

export default NotFoundPage
