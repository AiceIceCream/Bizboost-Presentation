import React from "react";
import { Container, Card, UserImg, UserInfo, UserName, UserInfoText, PostTime, PostText, PostImg, PostImage, InteractionWrapper, Interaction, InteractionText, Divider } from "../styles/Homestyle";
import { Ionicons } from "@expo/vector-icons";

const PostCard = ({item}) => {

    likeIcon = item.liked ? 'heart' : 'heart-outline';
    likeIconColor = item.liked ? '#2e64e5' : '#6666ff';

    if(item.likes == 1){
      likeText = '1 Like';
    }else if(item.likes > 1){
      likeText = item.likes + ' Likes';
    }else{
      likeText = 'Like';
    }

    if(item.comments == 1){
      commentText = '1 Comment';
    }else if(item.comments > 1){
      commentText = item.likes + ' Comments';
    }else{
      commentText = 'Comment';
    }

    return(
        <Card>
        <UserInfo>
          <UserImg source={item.userImg} />
            <UserInfoText>
              <UserName>{item.userName}</UserName>
              <PostTime>{item.postTime ? item.postTime.toLocaleString() : null}</PostTime>
            </UserInfoText>
        </UserInfo>

        <PostText>{item.post}</PostText>
        {item.postImg != null ? <PostImg source={{uri: item.postImg }} /> : <Divider/>}
        

        <InteractionWrapper>
          
          <Interaction active={item.liked}> 
            <Ionicons name={likeIcon} size={25}/>
            <InteractionText active={item.liked}>{likeText}</InteractionText>
          </Interaction>

          <Interaction> 
            <Ionicons name="md-chatbubble-outline" size={25}/>
            <InteractionText>{commentText}</InteractionText>
          </Interaction>

        </InteractionWrapper>
      </Card>
    );
};

export default PostCard;