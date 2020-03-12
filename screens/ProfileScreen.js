import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function HomeScreen() {
  return (
    <WebView source={{uri: 'https://demonstratorreact.netlify.com/'}}/>
  );
}

