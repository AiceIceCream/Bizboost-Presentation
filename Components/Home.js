import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native"
import { Container, Banner } from "../styles/Homestyle";
import { Ionicons } from "@expo/vector-icons";
import PostCard from "./PostCard";
import { firebase, firestore } from "../firebaseApp";

const Posts = [
  {
    id: '1',
    userName: 'Humphrey Manuel',
    userImg: require("../assets/temp_avatar.jpg"),
    postTime: '4mins ago',
    post: 'I love coffee, any recommmendations?',
    postImage: require("../assets/samplePost.jpg"),
    liked: true,
    likes: '15',
    comments: '5'
  },
  {
    id: '2',
    userName: 'Rica Bendijo',
    userImg: require("../assets/temp_avatar2.jpg"),
    postTime: '10mins ago',
    post: 'I offer academic services, please contact me.',
    postImage: 'none',
    liked: true,
    likes: '5',
    comments: '5'
  },
  {
    id: '3',
    userName: 'Nizel Agan',
    userImg: require("../assets/temp_avatar3.jpg"),
    postTime: '28mins ago',
    post: 'Visit my thriftshop near USTP!',
    postImage: require("../assets/samplePost3.jpg"),
    liked: true,
    likes: '1',
    comments: '1'
  },
  {
    id: '4',
    userName: 'Kench Ralfhael Bejec',
    userImg: require("../assets/temp_avatar4.jpg"),
    postTime: '28mins ago',
    post: "I do computer troubleshoot, message me when you're in need.",
    postImage: 'none',
    liked: true,
    likes: '23120',
    comments: '1150'
  },

];


const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await firestore.collection('posts').get();
        const list = [];

        querySnapshot.forEach((doc) => {
          const { post, postImg, postTime, likes, comments } = doc.data();
          list.push({
            userName: 'Test',
            userImg: "../assets/temp_avatar4.jpg",
            post,
            postImg: postImg,
            postTime: postTime ? postTime.toDate() : null,
            liked: false,
            likes,
            comments,
          });
        });

        setPosts(list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const unsubscribe = firestore.collection('posts').onSnapshot(() => {
      fetchData(); 
    });

    fetchData();

    return () => {
      unsubscribe(); 
    };
  }, []); 

  const combinedPosts = [...Posts, ...posts];

  const renderPostItem = ({ item }) => <PostCard item={item} />;

  // const bannerImage = require("../assets/logo.png");

  return (
    <Container>
      <View>
      <Banner>Bizboost</Banner>
      <FlatList
        data={combinedPosts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </Container>
  );
};

export default Home;
