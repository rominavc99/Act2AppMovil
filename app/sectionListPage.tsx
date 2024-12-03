import React from "react";
import { SectionList, Text, View, StyleSheet } from "react-native";

const DATA = [
  {
    title: "Carnívoros",
    data: ["Tiranosaurio", "Velociraptor"],
  },
  {
    title: "Herbívoros",
    data: ["Triceratops", "Brachiosaurio"],
  },
];

export default function SectionListPage() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
});
