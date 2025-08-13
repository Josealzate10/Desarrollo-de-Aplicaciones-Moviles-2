import { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { router } from 'expo-router';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(false);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, cerrar sesión', onPress: () => console.log('Sesión cerrada') },
      ]
    );
  };

  const renderOption = (title, onPress, rightElement = null) => (
    <TouchableOpacity style={styles.optionBox} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.optionText}>{title}</Text>
      {rightElement}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Ajustes</Text>

      {renderOption('Cuenta', () => router.push('/cuenta'))}

      <View style={styles.optionBox}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch
          value={notificaciones}
          onValueChange={() => setNotificaciones(!notificaciones)}
        />
      </View>

      {renderOption('Privacidad', () => router.push('/privacidad'))}
      {renderOption('Seguridad', () => router.push('/seguridad'))}
      {renderOption('Ayuda', () => router.push('/ayuda'))}

      <TouchableOpacity onPress={handleCerrarSesion} activeOpacity={0.7} style={styles.logoutBox}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  optionBox: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  logoutBox: {
    marginTop: 32,
    alignSelf: 'center',
  },
  logoutText: {
    color: '#243cc6ff',
    fontSize: 16,
  },
});
