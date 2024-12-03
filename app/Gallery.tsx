import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Dinosaurios</Text>
      <View style={styles.grid}>
        <Image
          source={{ uri: "https://ca-times.brightspotcdn.com/dims4/default/66de4e6/2147483647/strip/true/crop/1229x697+0+0/resize/1200x681!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbf%2F38%2F4d192b3e48db8b6086209fba108e%2Flas-10-peliculas-de-dinosaurio-1193461.JPG" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDk4LI11Rhn6qJqUeGZstBbSHIfsekbh5Rg&s" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfnD2fRJ5OaxKIHqVV4u6m2FBHcvzW79NBQ&s" }}
          style={styles.image}
        />
         <Image
          source={{ uri: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/06/30/649f13d4e3bfd.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i0.wp.com/endemico.org/wp-content/uploads/2020/05/dinosaurios.jpg?fit=1024%2C796&ssl=1" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Q21AzKaVi7wcKhLxHmVPnekYSgFssxAEPQ&s" }}
          style={styles.image}
        />
      </View>
    </View>
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
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 16,
  },
});
