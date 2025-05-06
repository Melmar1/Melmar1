import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Ops! Página não encontrada',
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: 'red',
        }}
      />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Clique aqui para voltar
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 45,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});