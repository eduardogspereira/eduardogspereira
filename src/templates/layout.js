import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import dayjs from 'dayjs'
import styled from 'styled-components'
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
  min-height: 100vh;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Card = styled.div`
  background-color: #f9f7f7;
  padding: 20px 20px 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  border: solid 1px white;
  border-radius: 2%;
  width: 90%;
  height: 90vh;
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
  width: 100%;
`

const BackToBlocks = styled(Link)`
  cursor: pointer;
  margin-top: 35px;
  color: #4f4f4f;
  font-weight: 600;

  &:hover {
    color: #1c1c1c;
  }
`

const Layout = ({ data: { mdx: post } }) => {
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Container>
        <Card>
          <Title>
            {post.frontmatter.title}
            <span>[{parseDate(post.frontmatter.date)}]</span>
          </Title>
          <TextWrapper>
            <MDXRenderer>{post.body}</MDXRenderer>
          </TextWrapper>
          <BackToBlocks to="/blog">&larr; Back to blog</BackToBlocks>
        </Card>
      </Container>
    </>
  )
}

export default Layout
