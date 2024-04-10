import React, {FC} from 'react';
import styled from "styled-components";
import Post from "./post/Post";
import {ProfilePageType} from "../../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    addPost: (updateNewPost:string) => void
    profilePageState: ProfilePageType
}

type FormPost = {
    updateNewPost: string
}

const PostForm: React.FC<InjectedFormProps<FormPost>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"updateNewPost"}
                   style={{width: "100%", resize: "none"}}/>
            <button style={{display: "block", float: "right"}}>Send</button>
        </form>
    </>
}

const PostReduxForm = reduxForm<FormPost>({
    form: 'post'
})(PostForm)

const MyPosts: FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const posts = props.profilePageState.posts.map((p,i) => {
        return <Post key={i} post={p.post} likes={p.likes}/>
    })

    const onHandleSubmit = ({updateNewPost}: FormPost) => {
        props.addPost(updateNewPost)
    }

    return (
        <StyledMyPosts>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={onHandleSubmit}/>
            </div>

            {posts}

        </StyledMyPosts>
    );
};

export default MyPosts;

const StyledMyPosts = styled.div`

`