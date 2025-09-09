import { View, StyleSheet, ImageSourcePropType } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import CircleButton from "@/components/CircleButton";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(null);
    setSelectedImage(undefined);
  };

  const onAddSticker = () => setIsModalVisible(true);
  const onModalClose = () => setIsModalVisible(false);

  const onSaveImageAsync = async () => {
  };

  return (
    < GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>0
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <Button label="Reset" theme="primary" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <Button label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList
          onSelect={setPickedEmoji} onCloseModal = {onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

