import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

import LoginScreen from '../components/Authorization/LoginScreen';
import RegisterScreen from '../components/Authorization/RegisterScreen';


const AuthScreen = props => {

  return (
    <View>
      <LoginScreen></LoginScreen>
      <RegisterScreen></RegisterScreen>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
