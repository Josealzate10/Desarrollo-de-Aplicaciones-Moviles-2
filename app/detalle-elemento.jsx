import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { router } from 'expo-router';
import datos from '../assets/datos.json';

export default function DetalleElemento() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState(datos);

  
  useEffect(() => {
    const filtrados = datos.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TextInput
        placeholder="Buscar por título"
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        style={styles.input}
      />

      {listaFiltrada.map((elemento) => (
        <Card key={elemento.id} style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium" style={styles.titulo}>
              {elemento.titulo}
            </Text>

            <Image source={{ uri: elemento.urlImagen }} style={styles.img} />

            <Text style={styles.descripcion}>{elemento.descripcion}</Text>

            <Button
              mode="contained"
              style={styles.btnVolver}
              onPress={() => router.back()}
            >
              Volver
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 15,
    borderRadius: 8
  },
  card: { marginBottom: 20 },
  titulo: { marginBottom: 10, fontWeight: 'bold' },
  img: { width: '100%', height: 200, marginVertical: 10, borderRadius: 8 },
  descripcion: { marginTop: 10, fontSize: 16, lineHeight: 22 },
  btnVolver: { marginTop: 20 }
});
