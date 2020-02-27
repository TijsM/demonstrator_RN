import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import consts from "../../constants/ApiKeys";

const LoginScreen = props => {
  const [email, setEmail] = React.useState("email");
  const [password, setPassword] = React.useState("password");

  const login = async () => {
    console.log("login clicked");
    console.log(email);
    console.log(password);

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${consts.firebaseConfig.apiKey}`,
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

    if (response) {
      console.log("login successful");
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <View>
      <Text>login:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="login" onPress={() => login()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({});

export default LoginScreen;
