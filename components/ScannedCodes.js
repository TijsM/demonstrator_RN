import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ScannedCodes(props) {
  console.log(props.codes);
  let codeCards = props.codes.map(scan => {
    return (
      <View style={styles.card}>
        <Text style={styles.type} >type: {scan.type}</Text>
        <Text style={styles.data}>link: {scan.data}</Text>
      </View>
    );
  });
  return <View>{codeCards}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    marginLeft: "10%",
    backgroundColor: "white",
    marginVertical: 20,
    borderRadius: 15,
    padding: 20

  },
  type:{
      fontWeight: 'bold',
      borderBottomWidth: 1,
      borderBottomColor: '#ABABAB',
      padding: 5
  },
  data:{
      padding: 5
  }
  
});
