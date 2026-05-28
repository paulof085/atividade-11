import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');

  function handleSubmit() {
    if (!nome.trim() || !idade.trim() || !curso.trim()) {
      return;
    }

    router.push({
      pathname: '/perfil',
      params: { nome, idade, curso },
    });
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.card}>
          <ThemedText type="title">Cadastro</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            Preencha seus dados para ver o perfil completo.
          </ThemedText>

          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
            placeholderTextColor="#8e9ab0"
          />
          <TextInput
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
            placeholder="Idade"
            keyboardType="numeric"
            placeholderTextColor="#8e9ab0"
          />
          <TextInput
            style={styles.input}
            value={curso}
            onChangeText={setCurso}
            placeholder="Curso"
            placeholderTextColor="#8e9ab0"
          />

          <Button title="Enviar" onPress={handleSubmit} />
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  card: {
    gap: Spacing.three,
    padding: Spacing.four,
    borderRadius: Spacing.four,
  },
  subtitle: {
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    backgroundColor: '#fff',
  },
});
