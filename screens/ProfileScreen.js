import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { COLORS, FONTS, SIZES, images } from "../Constants/colors";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
// import { photos } from "../constants/data";
import EditProfile from "./EditProfile";


const Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <StatusBar backgroundColor={"#CCCCCC"} />
      <View style={{ width: "100%" }}>
        <Image
          source={require('../assets/image.cover.png')}
          resizeMode="cover"
          style={{
            height: 228,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require('../assets/temp_avatar3.jpg')}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: "#000099",
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            // ...FONTS.h3,
            color: "#000099",
            marginVertical: 8,
          }}
        >
          Nizel Agan
        </Text>
        <Text
          style={{
            color: "#222222",
            // ...FONTS.body4,
          }}
        >
          Shopkeeper
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="#222222" />
          <Text
            style={{
              // ...FONTS.body4,
              marginLeft: 4,
            }}
          >
            Bugo CDO
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                // ...FONTS.h2,
                color: "#000099",
              }}
            >
              122
            </Text>
            <Text
              style={{
                // ...FONTS.body4,
                color: "#000099",
              }}
            >
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                // ...FONTS.h2,
                color: "#000099",
              }}
            >
              67
            </Text>
            <Text
              style={{
                // ...FONTS.body4,
                color: "#000099",
              }}
            >
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                // ...FONTS.h2,
                color: "#000099",
              }}
            >
              77K
            </Text>
            <Text
              style={{
                // ...FONTS.body4,
                color: "#000099",
              }}
            >
              Likes
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000099",
              borderRadius: 10,
              marginHorizontal: 2,
            }}
          >
            <Text
              style={{
                // ...FONTS.body4,
                color: "#FFFFFF",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => navigation.navigate("EditProfile")}
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000099",
              borderRadius: 10,
              marginHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 25 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>Post</Text>
            <View style={{ borderBottomWidth: 1,width: 1000, borderBottomColor: '#ccc', marginTop: 5 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;