import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Text
} from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputField, InputWrapper, SubmitBtn, SubmitBtnText, AddImage } from "../styles/AddPost";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from 'expo-file-system'
import { firebase, firestore } from "../firebaseApp";
import { addDoc, collection, Timestamp   } from "firebase/firestore";




const PostScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [post, setPost] = useState(null);

  const takePhotoFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
  });
  
  if(!result.canceled){
    setImage(result.assets[0].uri)
  }
  }


  const choosePhotoFromLibrary = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      
      if(!result.canceled){
        setImage(result.assets[0].uri)
      }
    }

    const submitPost = async () => {
      try {
          const imageUrl = await uploadedImage();
          console.log('Image Url: ', imageUrl);

          const currentTimeStamp = Timestamp.now();
  
          await addDoc(collection(firestore, 'posts'), {
              post: post,
              postImg: imageUrl,
              postTime: currentTimeStamp,
              likes: null,
              comments: null,
          });
  
          console.log("Post Added!");
          setPost(null);
      } catch (error) {
          console.error("Error adding post:", error);
      }
  }

    const uploadedImage = async () => {
      setUploading(true);
      if(image == null){
        setUploading(false);
        return null;
      }
  
      try {
        const { uri } = await FileSystem.getInfoAsync(image);
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
            resolve(xhr.response);
          };
          xhr.onerror = (e) => {
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          xhr.send(null);
        });
        
        const filename = image.substring(image.lastIndexOf('/') + 1);


        const ref = firebase.storage().ref().child(`photos/${filename}`);
  
        const snapshot = await ref.put(blob);
  
        // Access the download URL from the snapshot
        const downloadURL = await snapshot.ref.getDownloadURL();
  
        setUploading(false);
        Alert.alert('Post Uploaded', 'Your Post has been uploaded successfully!');
        setImage(null);
        return downloadURL;

      } catch (error) {
        console.error(error);
        setUploading(false);
        return null;
      }
    };


  return (
    <View style={styles.container}>
      <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}

        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}

        />
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
          <View><Text>  </Text></View>
          {uploading && <ActivityIndicator size="large" color="#000000" />}
      </InputWrapper>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButtonIcon:{
    fontSize: 20, 
    height: 22,
    color: 'white',
  }
});