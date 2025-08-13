import { ScrollView } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#f9f8ff' }}>
      <Text style={{ fontSize: 45, fontWeight: 'bold', marginBottom: 25, textAlign: '' }}>
        Pantallas
      </Text>

      <List.Item
        title="Inicio de Sesión"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="lock" color="#ff2d55" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/inicio-sesion')}
      />

      <List.Item
        title="Pantalla Principal"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="home" color="#5e88fc" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/pantalla-principal')}
      />

      <List.Item
        title="Lista de Elementos"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="format-list-bulleted" color="#ff667c" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/lista-elementos')}
      />

      <List.Item
        title="Detalle de Elemento"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="account" color="#9b59b6" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/detalle-elemento')}
      />

      <List.Item
        title="Formulario de Registro"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="cog-outline" color="#363636ff" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/formulario-registro')}
      />

      <List.Item
        title="Configuración"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="cog" color="#5c5b5bff" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/configuracion')}
      />

      <List.Item
        title="Perfil de Usuario"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="account" color="#525151ff" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/perfil-usuario')}
      />

      <List.Item
        title="Lista de Servicios"
        titleStyle={{ fontSize: 20, fontWeight: '600' }}
        style={{
          backgroundColor: '#f9f8ff',
          borderRadius: 14,
          marginBottom: 12,
          padding: 4,
          elevation: 2,
        }}
        left={() => <List.Icon icon="book" color="#0086a0ff" />}
        right={() => <List.Icon icon="chevron-right" color="#ccc" />}
        onPress={() => router.push('/lista-servicios')}
      />
    </ScrollView>
  );
}