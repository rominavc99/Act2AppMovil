import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [{ key: "Tiranosaurio" }, { key: "Triceratops" }, { key: "Velociraptor" }];

export default function ListPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Dinosaurios</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
});
