import { React, useState } from "react"
import {
    Button,
    Input,
    NewPostWrapper,
    TextArea,
    Title2,
    Title3,
} from "../Style"
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddPostForm() {
    const [authorName, setAuthorName] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const onSubmitButtonClicked = () => {
        if (authorName && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    authorName,
                    content
                })
            )
            setAuthorName("")
            setContent("")
        }
    }

    return (
        <NewPostWrapper>
            <Title2>New Thought</Title2>
            <Title3>Author Name:</Title3>
            <Input
                type="text"
                value={authorName}
                onChange={(e) => { setAuthorName(e.target.value) }}
            />
            <Title3>Content:</Title3>
            <TextArea
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            />
            <Button
                initial={{
                    background: "#E9B384",
                }}
                whileHover={{
                    background: "#A1CCD1"
                }}
                transition={{ease:"linear", duration: 0.2}}
                onClick={onSubmitButtonClicked}
            >
                Submit
            </Button>
        </NewPostWrapper>
    )
}