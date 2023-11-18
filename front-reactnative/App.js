import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rodando nossa aplicação no celular!</Text>
      <Text>Essa aplicação vai ser top Dutrinha, bjs bjs</Text>
      <Text>Que papai do céu ilumine seu bracinho </Text>
      <Text>direito e faça ficar do mesmo tamanho do esquerdo</Text>
      <Image source={require("./assets/strong.png")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
