import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from './PostCard'


export default class CreateStory extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){}

  renderItem = ({item:post}) => {
     return <PostCard post={post} navigation={this.props.navigation}/>;
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style = {styles.droiSafeArea}/>
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image 
            source={require('../assets/logo.png')} 
            style={styles.iconImage}></Image>
          </View>
          <View style = {styles.appTitleTextContainer}>
            <Text style = {styles.appTitleText}>Spectagram</Text>
          </View>
          <View style ={styles.cardContainer}>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
            />
          </View>
          <TouchableOpacity
             onPress={this.navigation.navigate}>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.curentHeight : RFValue(35)},
  appTitle:{
    flex: 0.07,
    flexDirection: "row"
    
  },
  appIcon:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage:{
    width: "100%",
    height:"100%",
    resizeMode: "contain"
  },
  appTitleTextContainer:{
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    flex : 0.8,
    fonySize: RFValue(28)
  },
  cardContainer: {
    flex: 0.85
  }
  
});