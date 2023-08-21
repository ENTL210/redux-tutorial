import { styled } from "styled-components";
import { motion } from "framer-motion"

const Container = styled(motion.div)`
width: 100vw;
background: #F4F2DE;
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
padding: 50px 0px;
`
const Title = styled.h1`
width: 100%;
text-align: center;
`

const Title2 = styled.h2`
width: 100%;
text-align: left;
`

const Title3 = styled.h3`
text-align: left;
font-size: 20px;
justify-content: center;
margin: auto 0px;
`

const PostWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 10px;
`

const Post = styled.div`
width: 100%;
border-radius: 18px;
background: #FFFFFF;
display: flex;
flex-direction: column;
padding: 0px 20px;
`
const PostTitle = styled.p`
color: #000000;
font-size: 18px;
font-weight: 900;
line-height: 1;
letter-spacing: 1px;
`

const PostBody = styled.p`
color: #000000;
font-size: 20px;
font-weight: 400;
line-height: 1.2;
max-width: 50ch;
`

const NewPostWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
border-radius: 18px;
background: #FFFFFF;
padding: 30px 20px;
gap: 20px;
`

const Input = styled.input`
padding: 10px;
max-width: 100%;
min-width: 50%;
font-size: 20px;
min-height: 20%;
`

const TextArea = styled.textarea`
padding: 5px;
max-width: 100%;
min-width: 100%;
font-size: 20px;
min-height: 20%;
`

const Button = styled(motion.button)`
background: #E9B384;
color: #FFFFFF;
font-size: 25px;
font-weight: 600;
text-align: center;
align-items: center;
border: none;
border-radius: 30px;
width: 200px;
height: 50px;
cursor: pointer;
outline: inherit;
margin: 20px 0px;
`


export { 
    Container, 
    Title,
    Title2,
    Title3,
    NewPostWrapper,
    PostWrapper, 
    Post, 
    PostTitle,
    PostBody,
    Input,
    TextArea,
    Button,
}