import { View, Text, StyleSheet } from "react-native";

type DayListItem = {
  day: number;
};

function DayListItem({ day }: DayListItem) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    // width: 300,
    // height: 300,

    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 75,
    fontFamily: "AmaticBold",
  },
});
