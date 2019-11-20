import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { Link } from 'gatsby'
import book from '../assets/book.svg'
import SEO from '../components/seo'
import usePosts from '../hooks/use-posts'

const parseDate = date => dayjs(date).format('YYYY-MM-DD HH:mm')

const Container = styled.div`
  min-height: 100vh;
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
  padding: 20px 20px 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  border: solid 1px white;
  border-radius: 2%;
  width: 700px;
  height: 80vh;
`

const Title = styled.h2`
  align-self: start;
  display: flex;
  height: 24px;
`

const Icon = styled.img`
  width: 24px;
  margin-left: 10px;
`

const BlogEntry = styled.section`
  margin-bottom: 15px;
  cursor: pointer;

  & > a {
    text-decoration: none;
    font-weight: 600;
    color: #4f4f4f;

    &:hover {
      color: #1c1c1c;
    }

    & > span {
      font-weight: 400;
      font-size: 0.9em;
    }
  }
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

const Blog = () => {
  const posts = usePosts()

  return (
    <>
      <SEO title="Blog" />
      <Container>
        <Card>
          <Title>
            Blog <Icon src={book} />
          </Title>
          {posts.map(post => (
            <BlogEntry>
              <Link to={post.slug}>
                {post.title}
                <span> - {parseDate(post.date)}</span>
              </Link>
            </BlogEntry>
          ))}
          <BackToHome to="/">&larr; Back to Home</BackToHome>
        </Card>
      </Container>
    </>
  )
}

export default Blog
