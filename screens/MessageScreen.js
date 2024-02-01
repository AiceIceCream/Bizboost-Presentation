import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList, Image } from "react-native";

export default function MessageScreen() {
    const [messages] = useState([
        { id: 1, profileIcon: require('../assets/temp_avatar2.jpg'), name: "Rica Maglacion Bendijo", text: "Hello Humphrey! Here's the code progress.", time: "10:00 PM" },
        { id: 2, profileIcon: require('../assets/temp_avatar3.jpg'), name: "Nizel Agravante Agan", text: "Thank you for buying in our shop sa uulitin po.", time: "10:15 PM" },
        { id: 3, profileIcon: require('../assets/temp_avatar4.jpg'), name: "Kenj Bejec", text: "Mag avail ka sir?", time: "10:30 PM" },
        { id: 4, profileIcon: require('../assets/temp_avatar5.jpg'), name: "Alex Simon", text: "Is this still available?", time: "Yesterday" }
        
      ]);



  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.label}>Messages</Text>
            <Image source={require('../assets/write_message_icon.png')} style={styles.writeMessageIcon} />
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('../assets/search_icon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          // pending search functionality
        />
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Image source={item.profileIcon} style={styles.profileIcon} />
            <View style={styles.messageContent}>
              <Text style={styles.profileName}>{item.name}</Text>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
    marginTop: 24,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeMessageIcon: {
    width: 24,
    height: 24,
    tintColor: '#0082FC',
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: 'rgba(200, 200, 200, 0.5)', 
    borderRadius: 8,
    paddingLeft: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: 'darkgray', 
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize:16,
    color: 'darkgray', 
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageContent: {
    flex: 1,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 12,
    marginLeft: 8,
  },

});