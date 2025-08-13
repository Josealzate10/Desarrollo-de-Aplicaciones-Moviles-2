import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import usuarios from '../assets/usuarios.json';
import { useRouter } from 'expo-router';

export default function PerfilUsuario() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {usuarios.map((usuario) => (
        <TouchableOpacity
          key={usuario.id}
          style={styles.card}
          onPress={() => router.push({ pathname: '/detalle-usuario', params: { id: usuario.id } })}
        >
          <MaterialCommunityIcons name="account-circle" size={60} color="#6c63ff" style={styles.icon} />

          <View>
            <Text style={styles.name}>{usuario.nombre}</Text>
            <Text style={styles.email}>{usuario.email}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: { marginRight: 16 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 14, color: '#666' },
});
