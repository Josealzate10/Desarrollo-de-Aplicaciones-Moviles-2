import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Autor() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/autor.png')}
        style={styles.avatar}
      />

      <Text variant="headlineMedium" style={styles.nombre}>
        Jose Leandro Alzate Morales
      </Text>
      <Text style={styles.info}>Desarrollador de aplicaciones móviles</Text>
      <Text style={styles.info}>Correo: jose.alzate520@utch.edu.co</Text>
      <Text style={styles.info}>Número de teléfono: 3205673783</Text>

      <Button
        mode="contained"
        style={styles.btnVolver}
        onPress={() => router.back()}
      >
        Volver
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20, borderWidth: 2, borderColor: '#3f51b5' },
  nombre: { fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 16, textAlign: 'center', marginBottom: 5 },
  btnVolver: { marginTop: 20, backgroundColor: '#3f51b5' },
});
