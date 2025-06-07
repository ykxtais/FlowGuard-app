import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Alertas() {
  const alertas = [
    {
      regiao: 'Vila Nova',
      titulo: 'Nível de água elevado',
      detalhe: 'Sensor detectou aumento significativo no nível da água. Risco de alagamento nas próximas horas.'
    },
    {
      regiao: 'Aricanduva',
      titulo: 'Avenida Aricanduva interditada',
      detalhe: 'Devido a enchentes, a avenida principal foi interditada. Evite a região e siga rotas alternativas.'
    },
    {
      regiao: 'Itaquera',
      titulo: 'Monitoramento constante',
      detalhe: 'Área sob vigilância. Ainda não há risco crítico, mas atenção é recomendada em caso de chuva forte.'
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Alertas atuais</Text>

      {alertas.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.region}>{item.regiao}</Text>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardDetail}>{item.detalhe}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a4357',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    color: '#9ca1cf',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#00ada7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  region: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c2e3a',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 15,
    color: '#2c2e3a',
    fontWeight: '600',
    marginBottom: 6,
  },
  cardDetail: {
    fontSize: 14,
    color: '#2c2e3a',
    lineHeight: 20,
  },
});
