import React, {FC} from 'react';
import styled from "styled-components";
import BackgroundImg from "./backgroundImg/BackgroundImg";
import AvaDescription from "./avaDescription/AvaDescription";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType, updateStatus} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

    return (
        <StyledProfile>
            <BackgroundImg/>
            <AvaDescription profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`

`