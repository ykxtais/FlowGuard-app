import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground source={require('../img/backh.jpg')} style={styles.backgroundImg}>
      <View style={styles.container}>
        

        <Image source={require('../img/title.jpg')} style={styles.titleImg} />

        <View style={styles.card}>
          <Text style={styles.largerText}>
           O FlowGuard é uma solução IoT de baixo custo que monitora em tempo real o nível de água em bueiros urbanos.
          Com sensores instalados em locais estratégicos, o sistema detecta riscos de alagamento e emite alertas
          imediatos à população, oferencendo uma resposta rápida e preventiva.
          </Text>
        </View>

        <View style={styles.row}>
          <Image source={require('../img/deco.jpg')} style={styles.adImg} />
          <View style={styles.smallCard}>
            <Text style={styles.text}>
              Ao identificar enchentes antes que elas ocorram, o FlowGuard ajuda a evitar prejuízos, garante a segurança de moradores
              e contribui para a gestão eficiente de áreas urbanas vulneráveis.
            </Text>
          </View>
        </View>

      </View>
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
    alignItems: 'center',
  },
  titleImg: {
    width: 330,
    height: 100,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignSelf: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8, 
  },
  adImg: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  smallCard: {
    width: 227,
    height: 140,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mainText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  text: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
