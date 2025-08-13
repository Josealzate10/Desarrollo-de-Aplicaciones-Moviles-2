import { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { router } from 'expo-router';
import datos from '../assets/datos.json';

export default function ListaElementos() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState(datos);

  useEffect(() => {
    const filtrados = datos.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">{item.titulo}</Text>

        
        <View style={styles.row}>
          <Image source={{ uri: item.urlImagen }} style={styles.img} />

          
          <View style={styles.textContainer}>
            <Text>{item.descripcion.substring(0, 50)}...</Text>
          </View>

          
          <Button
            mode="contained"
            style={styles.btn}
            onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
          >
            Acción
          </Button>
        </View>

      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por título"
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        style={styles.input}
      />
      <FlatList
        data={listaFiltrada}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 8
  },
  card: { marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center' },
  img: { width: 80, height: 80, borderRadius: 8 },
  textContainer: { flex: 1, marginLeft: 10 },
  btn: { marginLeft: 10 }
});
