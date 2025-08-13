import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Cuenta() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Pantalla de Cuenta</Text>
      <Text>Aquí podrás ver y editar la información de tu cuenta.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});
