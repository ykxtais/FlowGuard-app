import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Alert, StyleSheet,
  TouchableOpacity, FlatList
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../api/api';

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function RegiForm() {
  const [estado, setEstado] = useState('');
  const [distrito, setDistrito] = useState('');
  const [regioes, setRegioes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const carregarRegioes = async () => {
    try {
      const res = await api.get('/regioes');
      setRegioes(res.data.content);
    } catch (err) {
      Alert.alert('Erro ao carregar regiões');
    }
  };

  useEffect(() => {
    carregarRegioes();
  }, []);

  const enviar = async () => {
    if (!estado || !distrito) {
      Alert.alert('Preencha o estado e o distrito.');
      return;
    }

    try {
      if (editandoId) {
        await api.put(`/regioes/${editandoId}`, { estado, distrito });
        Alert.alert('Incidente atualizado!');
      } else {
        await api.post('/regioes', { estado, distrito });
        Alert.alert('Incidente reportado!');
      }

      setEstado('');
      setDistrito('');
      setEditandoId(null);
      setMostrarFormulario(false);
      carregarRegioes();
    } catch (err) {
      console.error(err.response?.data || err.message);
      Alert.alert('Erro ao enviar.', err.response?.data?.message || '');
    }
  };

  const editar = (regiao) => {
    setEstado(regiao.estado);
    setDistrito(regiao.distrito);
    setEditandoId(regiao.id);
    setMostrarFormulario(true);
  };

  const deletar = async (id) => {
    try {
      await api.delete(`/regioes/${id}`);
      Alert.alert('Incidente removido.');
      carregarRegioes();
    } catch {
      Alert.alert('Erro ao deletar.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnInci} onPress={() => setMostrarFormulario(!mostrarFormulario)}>
        <Text style={styles.btnText}>Reportar Incidente</Text>
      </TouchableOpacity>

      {mostrarFormulario && (
        <View style={styles.form}>
          <Text style={styles.label}>Local do Ocorrido</Text>

          <Text style={styles.subLabel}>Estado</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={estado}
              onValueChange={setEstado}
              style={styles.picker}
            >
              <Picker.Item label="Selecione um estado" value="" />
              {estados.map((uf) => (
                <Picker.Item key={uf} label={uf} value={uf} />
              ))}
            </Picker>
          </View>

          <Text style={styles.subLabel}>Distrito</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o bairro ou distrito"
            value={distrito}
            onChangeText={setDistrito}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={enviar}>
            <Text style={styles.submitText}>{editandoId ? 'Atualizar' : 'Enviar'}</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.h1}>Incidentes Reportados</Text>
      <FlatList
        data={regioes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Estado: {item.estado}</Text>
            <Text style={styles.cardText}>Distrito: {item.distrito}</Text>
            <View style={styles.cardBtns}>
              <TouchableOpacity onPress={() => editar(item)}>
                <Text style={styles.edit}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletar(item.id)}>
                <Text style={styles.delete}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2e3a',
    padding: 16,
  },
  btnInci: {
    backgroundColor: '#00ada7',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 16,
  },
  label: {
    color: '#9ca1cf',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subLabel: {
    color: '#ccc',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#b4b8d9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: '#b4b8d9',
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
  submitBtn: {
    backgroundColor: '#676d9e',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  h1: {
    color: '#9ca1cf',
    fontSize: 22,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#00ada7',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  cardText: {
    color: '#2c2e3a',
    fontWeight: 'bold',
  },
  cardBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  edit: {
    color: '#2c2e3a',
    fontWeight: 'bold',
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
  },
});
