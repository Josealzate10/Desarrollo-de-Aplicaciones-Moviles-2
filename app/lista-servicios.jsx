import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const servicios = [
  {
    id: '1',
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos.',
    icono: 'phone',
  },
  {
    id: '2',
    titulo: 'Protección Inteligente',
    descripcion: 'Protege la seguridad.',
    icono: 'shield',
  },
  {
    id: '3',
    titulo: 'Compras',
    descripcion: 'Encuentra todo lo disponible para comprar.',
    icono: 'cart',
  },
  {
    id: '4',
    titulo: 'Maestro de Iluminación',
    descripcion: 'Encuentra todo lo relacionado con iluminación personalizada basada en la IA.',
    icono: 'account-cog-outline',
  },
];

export default function ListaServicios() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Servicios</Text>

      {servicios.map(({ id, titulo, descripcion, icono }) => (
        <View key={id} style={styles.card}>
          <MaterialCommunityIcons name={icono} size={40} color="#3f51b5" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{titulo}</Text>
            <Text style={styles.cardDescription}>{descripcion}</Text>
            <Button
              mode="contained"
              onPress={() => router.push({ pathname: '/detalle-servicio', params: { id } })}
              style={styles.button}
              icon="arrow-right"
            >
              Acción
            </Button>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: { marginRight: 16 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#2b2b2b' },
  cardDescription: { fontSize: 14, color: '#7a7a7a', marginBottom: 12 },
  button: { alignSelf: 'flex-start', backgroundColor: '#3f51b5' },
});
