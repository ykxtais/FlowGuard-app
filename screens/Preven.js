import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Prevencoes() {
  const dicas = [
    { texto: 'Cuidado com eletrônicos próximos da água', icone: 'power-plug-off' },
    { texto: 'Cuidado com crianças, idosos e animais', icone: 'account-group' },
    { texto: 'Procure um local seguro o quanto antes', icone: 'home-lock' },
    { texto: 'Não tente salvar objetos — priorize sua vida', icone: 'heart' },
    { texto: 'Água de enchente pode causar infecções irreversíveis', icone: 'shield-alert' }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Prevenções</Text>

      {dicas.map((item, index) => (
        <View key={index} style={styles.card}>
          <MaterialCommunityIcons name={item.icone} size={24} color='#2c2e3a' style={styles.icon} />
          <Text style={styles.cardText}>{item.texto}</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9ca1cf',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#00ada7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#2c2e3a',
    fontWeight: '600',
    flexShrink: 1,
  },
});
