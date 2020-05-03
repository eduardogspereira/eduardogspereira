import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'
import SEO from '../components/seo'

const parseDate = date => dayjs(date).format('YYYY-MM-DD HH:mm')

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const Container = styled.div`
  font-family: monospace;
  font-size: 14px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: 10px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Title = styled.h2`
  align-self: start;
  display: flex;
  height: 24px;

  & > span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #1c1c1c;
  }
`

const TextWrapper = styled.section`
  font-size: 15px;
  line-height: 20px;
  width: 50%;
  justify-content: center;
`

const BackToBlocks = styled(Link)`
  cursor: pointer;
  margin-top: 35px;
  color: #4f4f4f;
  font-weight: 600;
  padding-bottom: 30px;

  &:hover {
    color: #1c1c1c;
  }
`

const Layout = ({ data: { mdx: post } }) => {
  const disqusConfig = {
    shortname: 'eduardogspereira-dev',
    config: {
      identifier: post.frontmatter.slug,
      title: post.frontmatter.title,
    },
  }

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Container>
        <Title>
          {post.frontmatter.title}
          <span>[{parseDate(post.frontmatter.date)}]</span>
        </Title>
        <TextWrapper>
          <MDXRenderer>{post.body}</MDXRenderer>
        </TextWrapper>
        <BackToBlocks to="/blog">&larr; Back to blog index</BackToBlocks>
        <div style={{ width: '90%' }}>
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </Container>
    </>
  )
}

export default Layout
