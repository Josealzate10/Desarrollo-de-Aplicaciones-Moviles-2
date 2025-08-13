import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Bienvenida() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>¡Nos alegra tenerte aquí!</Text>

      <Image
        source={require('../assets/bienvenido.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Button
        mode="contained"
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
        onPress={() => router.push('/home')}
      >
        Empezar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2b2b2b',
  },
  subtitle: {
    fontSize: 16,
    color: '#7a7a7a',
    marginBottom: 24,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 32,
  },
  button: {
    width: '100%',
    backgroundColor: '#3f51b5',
    borderRadius: 10,
  },
});