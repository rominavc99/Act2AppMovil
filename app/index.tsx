import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dinosaurios</Text>
      <Text style={styles.subtitle}>
        Explora la era de los dinosaurios: desde los herbívoros gigantes hasta los depredadores temibles.
      </Text>
      <Button title="Información" onPress={() => router.push("./Info")} />
      <Button title="Contacto" onPress={() => router.push("./Contact")} />
      <Button title="Galeria" onPress={() => router.push("./Gallery")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    },
   subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
});
