// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
// import Data from "../data/data";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Cau2b = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/img/usb.png")}
          style={{ height: "49px", width: "54.5px", marginRight: "10px" }}
        ></Image>
        <Text style={styles.text1}>
          USB Bluetooth Music Receiver{"\n"}HJX-001- Biến loa thường thành loa{" "}
          {"\n"}bluetooth
        </Text>
      </View>
      <View style={styles.imgContainer}>

      <Text style={styles.text2}>Cực kỳ hài lòng</Text> 
        <View style={styles.img}>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
        <Image source={require('../assets/img/star.png')} style={{height: '39px', width: '39px'}}></Image>
      
        </View>
       
      </View>
      
      <TouchableOpacity>
        <View style={styles.btn1}>
          <Image
            source={require("../assets/img/camera.png")}
            style={{ width: "39px", height: "32px", right: "10px" }}
          ></Image>
          <Text style={styles.text3}>Thêm hình ảnh</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.input1}>
        <TextInput
          placeholder="Hãy chi sẻ những điều mà bạn 
 thích về sản phẩm "
          style={{
            color: "rgba(196, 196, 196, 1)",
            textAlign: "center",
            marginLeft: "5px",
           
          }}
        ></TextInput>
        <TouchableOpacity>
        <Text style={styles.text4}>https://meet.google.com/nsj-ojwi-xpp</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity> 
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.text5}>Gửi</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "640px",
    width: "360px",
  },

  header: {
    width: "360px",
    height: "105px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
  },

  text1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "18.75px",
  },

  text2: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "21.09px",
    fontFamily: "roboto",
    textAlign: "center",
    marginTop: '20px',
    marginBottom: '20px'
  },

  btn1: {
    width: "293px",
    height: "68px",
    borderWidth: "1px",
    borderRadius: "5px",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(21, 17, 235, 1)",
    marginTop: "100px",
  },

  text3: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "21.09px",
    textAlign: "center",
  },

  input1: {
    width: "293px",
    height: "222px",
    borderWidth: "1px",
    borderRadius: "5px",
    borderColor: "rgba(196, 196, 196, 1)",
    marginTop: "15px",
    alignSelf: "center",
    flexDirection:'column',
    justifyContent: 'space-between',
  },

  text4:{
    fontFamily: 'roboto',
    fontSize: '12px',
    lineHeight: '14.06px',
    fontWeight: 'bold',
    marginLeft: '80px'
  },

  btnContainer:{
    flex:1,
  },

  btn:{
    height: '41px',
    width: '289px',
    borderWidth: "1px",
    borderRadius: "5px",
    backgroundColor: 'rgba(21, 17, 235, 1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '20px'
  },

  text5:{
    fontFamily: 'roboto',
    fontSize: '20px',
    lineHeight: '23.44px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },

  imgContainer:{
    flex: 1,
  },
  img:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft:'25px',
    marginRight: '25px',
    marginTop: '25px'
  }
});
export default Cau2b;
