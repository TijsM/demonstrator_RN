import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import consts from "../../constants/ApiKeys";

const RegisterScreen = props => {
  const [email, setEmail] = React.useState("email");
  const [password, setPassword] = React.useState("password");


  let content = (
    <Text></Text>
  );

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


    console.log(response)

    if(response){
      content = (
        <Text>Registered!!!</Text>
      );
      
    }
    else{
      console.log('something went wrong')
    }
  };

  

  return (<View>
      <Text>register:</Text>
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
      <Button title="register" onPress={() => register()}></Button>
      {content}
    </View>
    
  );
};
const styles = StyleSheet.create({});

export default RegisterScreen;
