import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { styled } from 'styled-components'
import {motion} from 'framer-motion'
import { Container, Button, PostWrapper, Title, Title2, NewPostWrapper, Post } from './Style.js'
import { useSelector } from 'react-redux'
import { postArray } from './posts/postsSlice'
import Posts from './posts/Posts'
import AddPostForm from './posts/AddPostForm'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const posts = useSelector(postArray)
  
  const postComponent = posts.map(item => {
    return <Posts key={item.id} {...item}/>
  })

  return (
    <Container>
      <Routes>
        {/* Redirect to / when the url isn't exist...*/}
        <Route path='*' element={<Navigate to={'/'}/>}/>
        {/* What to show up when url == "/" */}
        <Route path='/' element={
          <React.Fragment>
            <Title>Thoughts</Title>
            <AddPostForm/>
            <PostWrapper>
              {postComponent}
            </PostWrapper>
          </React.Fragment>
        }/>
      </Routes>
    </Container>
  )
}

export default App