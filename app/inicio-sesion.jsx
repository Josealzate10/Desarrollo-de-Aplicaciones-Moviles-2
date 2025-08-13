import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import usuarios from '../assets/usuarios.json'; 

export default function InicioSesion() {
  const router = useRouter();
  const [correo, setCorreo] = React.useState('');
  const [clave, setClave] = React.useState('');

  const iniciarSesion = () => {
    const usuario = usuarios.find((u) => u.email === correo);

    if (!usuario) {
      Alert.alert('El usuario no está creado');
      return;
    }

    if (usuario.clave !== clave) {
      Alert.alert('Datos de acceso incorrecto');
      return;
    }

    Alert.alert('Datos de acceso correcto');
    console.log('Sesión iniciada por:', usuario.nombre);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>INICIAR SESIÓN</Text>

      <TextInput
        label="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        mode="outlined"
        style={estilos.campo}
        left={<TextInput.Icon icon="email" />}
      />

      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        mode="outlined"
        secureTextEntry
        style={estilos.campo}
        left={<TextInput.Icon icon="lock" />}
      />

      <TouchableOpacity>
        <Text style={estilos.olvidoClave}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={iniciarSesion}
        style={estilos.botonIniciar}
        textColor="white"
        buttonColor="#2b4cc4"
      >
        INICIAR SESIÓN
      </Button>

      <View style={estilos.divisor}>
        <Text>o</Text>
      </View>

      <Button
        mode="outlined"
        icon="google"
        onPress={() => console.log('Iniciar sesión con Google')}
        style={estilos.botonAlternativo}
      >
        Iniciar sesión con Google
      </Button>

      <Button
        mode="outlined"
        icon="apple"
        onPress={() => console.log('Iniciar sesión con Apple')}
        style={estilos.botonAlternativo}
      >
        Iniciar sesión con Apple
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  campo: {
    marginBottom: 15,
  },
  olvidoClave: {
    alignSelf: 'flex-end',
    color: '#2b4cc4',
    marginBottom: 20,
  },
  botonIniciar: {
    marginBottom: 20,
    paddingVertical: 5,
  },
  divisor: {
    alignItems: 'center',
    marginBottom: 15,
  },
  botonAlternativo: {
    marginBottom: 10,
  },
});
