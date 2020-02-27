import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import consts from "../../constants/ApiKeys";

const RegisterScreen = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let content = <Text></Text>;

  const register = async () => {
    console.log("register clicked");
    console.log(email);
    console.log(password);

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${consts.firebaseConfig.apiKey}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    console.log(response);

    if (response.ok) {
      console.log('registered')
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>register</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="register" onPress={() => register()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 35,
    marginTop: 50,
    marginLeft: "5%",
    borderRadius: 15
  },
  title: {
    fontSize: 25,
    marginBottom: 20
  },
  input: {
    height: 30,
    width: "75%",
    marginLeft: "12.5%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    margin: 5,
    paddingLeft: 10
  }
});

export default RegisterScreen;
