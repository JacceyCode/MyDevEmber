import { StyleSheet, View } from "react-native";

import Markdown from "react-native-markdown-display";

const copy = `# h1 Heading 8-)

**This is some bold text!**

This is normal text
`;

function EditorScreen() {
  return (
    <View>
      <Markdown>{copy}</Markdown>
    </View>
  );
}

export default EditorScreen;

const styles = StyleSheet.create({});
