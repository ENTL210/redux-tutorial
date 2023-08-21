import React from "react";
import {
    Post, PostBody, PostTitle
} from '../Style.js'

export default function Posts(props) {
    const author = props.authorName
    const content = props.content
    return (
        <Post>
            <PostTitle>{author}</PostTitle>
            <PostBody>{content}</PostBody>
        </Post>
    )
}