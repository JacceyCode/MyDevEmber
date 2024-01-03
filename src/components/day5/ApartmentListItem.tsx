import { Image, StyleSheet, Text, View } from "react-native";

const ApartmentListItem = ({ apartment }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>{apartment.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>${apartment.price}</Text>
          <Text style={styles.price}>
            ★ {apartment.rating} ({apartment.stars})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // position: "absolute",
    // bottom: 50,
    // left: 10,
    // right: 10,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: 120,
    aspectRatio: 1,
  },
  rightContainer: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 16,
  },
  description: {
    marginBottom: 10,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  price: {
    fontFamily: "InterBold",
  },
});
