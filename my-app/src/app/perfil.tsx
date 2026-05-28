import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function PerfilScreen() {
  const params = useLocalSearchParams<{ nome?: string; idade?: string; curso?: string }>();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.card}>
          <ThemedText type="title">Perfil</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            Dados recebidos no cadastro.
          </ThemedText>

          <ThemedView type="backgroundElement" style={styles.infoBox}>
            <ThemedText type="smallBold">Nome</ThemedText>
            <ThemedText>{params.nome || 'Não informado'}</ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.infoBox}>
            <ThemedText type="smallBold">Idade</ThemedText>
            <ThemedText>{params.idade ? `${params.idade} anos` : 'Não informada'}</ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.infoBox}>
            <ThemedText type="smallBold">Curso</ThemedText>
            <ThemedText>{params.curso || 'Não informado'}</ThemedText>
          </ThemedView>

          <Link href="/" asChild>
            <Pressable style={styles.button}>
              <ThemedText type="linkPrimary">Voltar para o cadastro</ThemedText>
            </Pressable>
          </Link>
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
  infoBox: {
    borderRadius: 14,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  button: {
    alignItems: 'center',
  },
});
