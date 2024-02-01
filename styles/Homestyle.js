import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #fff;
    padding-top: 10px;
    padding-left: 2px;
    padding-right: 2px;
    margin-top: 5px
`;

export const Banner = styled.Text`
    width: 300px;
    height: 70px;
    margin-left: 10px;
    top: 30;
    font-size: 24;
    font-weight: bold;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14;
    font-weight: bold;
    font-family: sans-serif;
`;

export const PostTime = styled.Text`
    font-size: 12px;
    font-family: sans-serif;
    color: #666;
`;

export const PostText = styled.Text`
    font-size: 14;
    font-family: sans-serif;
    padding-left: 15px;
    padding-right: 15px;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;

export const PostImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;

export const Divider = styled.View`
    border-bottom-color: #333;
    border-bottom-width: 1px;
    width: 90%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'};
`;

export const InteractionText = styled.Text`
    font-size: 14;
    font-family: sans-serif;
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;