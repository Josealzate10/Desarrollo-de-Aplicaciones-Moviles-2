import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Card, Searchbar } from 'react-native-paper';
import datos from '../assets/datos.json'; 

export default function ListaTarjetas() {
  const [lista, setLista] = useState(datos);
  const [busqueda, setBusqueda] = useState('');

  const toggleMostrar = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].mostrarTodo = !nuevaLista[index].mostrarTodo;
    setLista(nuevaLista);
  };

  const datosFiltrados = lista.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>

      <Searchbar
        placeholder="Buscar..."
        value={busqueda}
        onChangeText={setBusqueda}
        style={styles.searchbar}
      />

      {/* Lista */}
      <FlatList
        data={datosFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Title title={item.titulo} />
            <Card.Content>
              <Image source={{ uri: item.urlImagen }} style={styles.imagen} />
              <Text>
                {item.mostrarTodo
                  ? item.descripcion
                  : `${item.descripcion.substring(0, 30)}...`}
              </Text>
              <Button
                onPress={() => toggleMostrar(index)}
                textColor="#2b4cc4"
              >
                {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
              </Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    margin: 10,
    borderRadius: 8,
  },
  card: {
    margin: 10,
  },
  imagen: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
});

