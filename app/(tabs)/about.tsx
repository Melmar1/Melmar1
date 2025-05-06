import { Text, View, StyleSheet } from "react-native";
import ImageViewer from '@/app/components/imageViewer';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
const PlaceholderImage = require('@/assets/images/oi.jpg');

export default function Index() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Nenhuma mensagem foi selecionada');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Mitsubishi LANCER EVO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(117, 217, 248)",
  },
  box: {
    width: 250,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: "black", 
    fontSize: 18,
    fontWeight: "bold",
  },
});