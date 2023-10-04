// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

const Cau2c = () => {
  const [isSelected, setSelecion] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.backgroundIn}>
        <Text style={styles.text1}>PASSWORD {"\n"} GENERATOR</Text>
        <View style={styles.ouput1}>
          <Text></Text>
        </View>

        <View style={styles.textContainer}>
          <View style={styles.input}>
            <Text style={styles.text2}>Password length</Text>
            <TextInput style={styles.input1}></TextInput>
          </View>

          <View style={styles.input}>
            <Text style={styles.text2}>Include lower case letters</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelecion}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.text2}>Include upcase letters{"     "}</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelecion}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.text2}>Include number{"                "}</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelecion}
              style={styles.checkbox}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.text2}>Include special symbol{"     "}</Text>
            <CheckBox
              value={isSelected}
              onValueChange={setSelecion}
              style={styles.checkbox}
            />
          </View>
        </View>

        <TouchableOpacity>
        <View style={styles.containerBtn}>
            <View style={styles.btn} >
                <Text style={styles.text3}>GENERATE PASSWORD</Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(to bottom, rgba(59, 59, 152, 1), rgba(196, 196, 196, 0))",
    height: "640px",
    width: "360px",
  },

  backgroundIn: {
    flex: 1,
    height: "605px",
    width: "322px",
    borderRadius: "15px",
    backgroundColor: "rgba(35, 35, 91, 1)",
    borderWidth: "2px",
    alignSelf: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },

  text1: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "29.3px",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    marginTop: "50px",
  },

  ouput1: {
    height: "55px",
    width: "297px",
    backgroundColor: "rgba(21, 21, 55, 1)",
    alignSelf: "center",
    marginTop: "30px",
  },

  textContainer: {
    flex: 1,
  },
  input: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: "20px",
  },

  text2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23.44px",
    color: "rgba(255, 255, 255, 1)",
  },

  input1: {
    width: "118px",
    height: "33px",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  checkbox: {
    alignSelf: "center",
    width: "25px",
    height: "25px",
  },

  containerBtn: {
    flex: 1,
  },
  btn:{
    height: '55px',
    width: '269px',
    backgroundColor: 'rgba(59, 59, 152, 1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '65px'
  },

  text3:{
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '21.09px',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    
  },
});
export default Cau2c;
