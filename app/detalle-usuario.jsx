import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import usuarios from '../assets/usuarios.json';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DetalleUsuario() {
  const { id } = useLocalSearchParams();
  const usuario = usuarios.find((u) => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: usuario.avatar || 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <MaterialCommunityIcons name="account-circle" size={60} color="#6c63ff" style={styles.icon} />
      <Text style={styles.name}>{usuario.nombre}</Text>
      <Text style={styles.info}>📧 {usuario.email}</Text>
      <Text style={styles.info}>📞 {usuario.telefono}</Text>
      <Text style={styles.info}>📍 {usuario.direccion}</Text>
      <Text style={styles.info}>🛠 Rol: {usuario.rol}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  avatar: { width: 150, height: 150, borderRadius: 75, alignSelf: 'center', marginBottom: 16 },
  name: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  info: { fontSize: 16, marginBottom: 8, textAlign: 'center', color: '#444' },
  icon: {textAlign: 'center', marginBottom: 10, fontSize: 100}
});
