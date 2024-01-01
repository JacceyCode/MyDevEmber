import { Link, Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Markdown

Integrate Markdown content in **React Native**

📚 Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session
`;

function DayDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day3/editor"} asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
}

export default DayDetailsScreen;
