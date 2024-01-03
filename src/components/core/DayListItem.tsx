import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
  day: number;
};

function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
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
