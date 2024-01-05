import { Link, Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Voice Memos
Work with the Microphone and Audio playback
`;

function DayDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7: Voice Memos" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day7/memos"} asChild>
        <Button title="Go to Voice Memo" />
      </Link>
    </SafeAreaView>
  );
}

export default DayDetailsScreen;
