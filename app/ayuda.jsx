import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Ayuda() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Pantalla de Ayuda</Text>
      <Text>Sección de preguntas frecuentes y soporte.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});
