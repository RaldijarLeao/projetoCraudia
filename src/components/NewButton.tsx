import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type Props ={
  title : string
  disable : boolean
  onPressButton: ()=>void
  Style:{
    width: number;
    backgroundColor: string;
    height: number;
    borderRadius: number;
    margin: number;
  }

}

const NewButton = ({title,disable,onPressButton, Style}:Props) => {

  const styles = StyleSheet.create({
    buttonContainer: {
      padding: 16,
      alignItems:"center"
      
    },
    title: {
      fontSize: 20,
      color: '#ffffff',
    },
  });
  


    return (
      <TouchableOpacity onPress={onPressButton} disabled={disable} >
      <View style={{...styles.buttonContainer, width:Style.width,
         height:Style.height, backgroundColor: disable ? 'red' : Style.backgroundColor, borderRadius:Style.borderRadius, margin:Style.margin}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
    );
}

export default NewButton;
