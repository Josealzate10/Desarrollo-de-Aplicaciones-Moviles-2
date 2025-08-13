import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

const servicios = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Este servicio permite realizar y recibir notificaciones automáticas por teléfono para mantenerte informado en tiempo real.',
    icono: 'phone',
  },
  {
    id: '2',
    titulo: 'Protección Inteligente',
    descripcion: 'Sistema avanzado de seguridad con monitoreo en tiempo real y detección automática de amenazas.',
    icono: 'shield',
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Accede a un catálogo completo de productos y servicios con las mejores ofertas.',
    icono: 'cart',
  },
  {
    id: '4',
    titulo: 'Maestro de Iluminación',
    descripcion: 'Configura y personaliza la iluminación de tus espacios con inteligencia artificial para adaptarse a tu estilo de vida.',
    icono: 'account-cog-outline',
  },
];

export default function DetalleServicio() {
  const { id } = useLocalSearchParams();
  const servicio = servicios.find((s) => s.id === id);

  if (!servicio) {
    return (
      <View style={styles.container}>
        <Text>Servicio no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={servicio.icono} size={80} color="#3f51b5" />
      <Text style={styles.title}>{servicio.titulo}</Text>
      <Text style={styles.description}>{servicio.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 16, textAlign: 'center' },
  description: { fontSize: 16, color: '#555', textAlign: 'center' },
});
