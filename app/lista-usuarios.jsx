import { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import usuarios from '../assets/usuarios.json';
import { useRouter } from 'expo-router';

export default function ListaUsuarios() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const router = useRouter();

  const filtrados = usuarios.filter(user =>
    user.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.buscar}
        placeholder="Buscar usuario..."
        value={textoBuscar}
        onChangeText={setTextoBuscar}
      />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => router.push({ pathname: '/perfil-usuario', params: { id: item.id } })}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  buscar: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 8 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  nombre: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 14, color: '#666' }
});
