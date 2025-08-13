import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json'; 

export default function Registro() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const existe = usuarios.some(
      u => u.email?.toLowerCase() === email.toLowerCase()
    );

    if (existe) {
      Alert.alert('Advertencia', 'El usuario ya existe.');
      return;
    }

    Alert.alert('Éxito', 'Usuario registrado correctamente.');
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialCommunityIcons name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Registro</Text>

      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Confirmar contraseña"
        value={confirmarContrasena}
        onChangeText={setConfirmarContrasena}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />

      <Button
        mode="contained"
        onPress={handleRegistro}
        style={styles.button}
      >
        Registrarse
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 16,
    width: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#3f51b5',
    borderRadius: 8,
    paddingVertical: 6,
  },
});

