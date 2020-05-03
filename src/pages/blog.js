import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { Link } from 'gatsby'
import book from '../assets/book.svg'
import SEO from '../components/seo'
import usePosts from '../hooks/use-posts'

const parseDate = date => dayjs(date).format('YYYY-MM-DD HH:mm')

const Container = styled.div`
  font-family: monospace;
  font-size: 14px;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const TitleWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-itens: center;
  margin-bottom: 50px;
`

const Title = styled.h2`
  align-self: start;
  display: flex;
  height: 24px;
`

const BackToHome = styled(Link)`
  cursor: pointer;
  margin-top: 35px;
  color: #4f4f4f;
  font-weight: 600;

  &:hover {
    color: #1c1c1c;
  }
`

const Icon = styled.img`
  width: 24px;
  margin-left: 10px;
`

const BlogEntry = styled.section`
  margin-bottom: 15px;
  cursor: pointer;
  align-self: flex-start;
  padding-left: 10%;
  color: black;

  & > a {
    text-decoration: none;
    font-weight: 600;
    color: black;

    &:hover {
      color: #1c1c1c;
    }

    & > span {
      font-weight: 400;
      font-size: 0.9em;
    }
  }
`

const Blog = () => {
  const posts = usePosts()

  return (
    <>
      <SEO title="Blog" />
      <Container>
        <TitleWrapper>
          <BackToHome to="/">&larr; Back to Home</BackToHome>
        </TitleWrapper>
        {posts.map(post => (
          <BlogEntry>
            <Link to={post.slug}>
              {post.title}
              <span> - {parseDate(post.date)}</span>
            </Link>
          </BlogEntry>
        ))}
      </Container>
    </>
  )
}

export default Blog
