import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function Bene() {
  return (
    <ImageBackground source={require('../img/backb.jpg')} style={styles.backgroundImg}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Benefícios</Text>

        <View style={styles.card}>
          <Image source={require('../img/b1.jpg')} style={styles.cardImg} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}> Ajuda Imediata</Text>
            <Text style={styles.cardDesc}>Receba alertas em tempo real sobre áreas com risco de enchente.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../img/b2.jpg')} style={styles.cardImg} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}> Tecnologia</Text>
            <Text style={styles.cardDesc}>Sensores IoT de alta eficiência para monitorar o nível da água em tempo real.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../img/b3.jpg')} style={styles.cardImg} />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}> Prevenção</Text>
            <Text style={styles.cardDesc}>Identificando rapidamente o aumento no nível da água. Proporciona alto impacto, ajuda a prevenir alagamentos nas cidades.</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 16,
    resizeMode: 'cover',
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: '#333',
  },
});
