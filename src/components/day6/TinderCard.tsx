import { Image, StyleSheet, Text, View } from "react-native";

const TinderCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: "" }} />

      <Text style={styles.name}>Dani</Text>
    </View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({
  card: {},
  image: {},
  name: {},
});
