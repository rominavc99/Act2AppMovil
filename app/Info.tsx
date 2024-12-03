import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";

const flatListData = [
  { key: "Tiranosaurio Rex" },
  { key: "Triceratops" },
  { key: "Velociraptor" },
];

const sectionListData = [
  {
    title: "Carnívoros",
    data: ["Tiranosaurio Rex", "Velociraptor"],
  },
  {
    title: "Herbívoros",
    data: ["Triceratops", "Brachiosaurio"],
  },
];

export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Información sobre Dinosaurios</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Q21AzKaVi7wcKhLxHmVPnekYSgFssxAEPQ&s",
        }}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        Los dinosaurios fueron un grupo de reptiles que dominaron la Tierra
        hace millones de años. Algunos ejemplos incluyen:
      </Text>

      <Text style={styles.subheading}>Lista de Dinosaurios</Text>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.key}</Text>
        )}
        keyExtractor={(item) => item.key}
      />

      <Text style={styles.subheading}>Dinosaurios por Categoría</Text>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 4,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    padding: 8,
    marginTop: 16,
  },
});
