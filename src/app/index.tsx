import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Input } from '@/components/Input';
import { Btn } from '@/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../images/diferentes-bem-vindo.png")} style={styles.image} />
      <Text style={styles.fontT1}>Logar...</Text>
      <Text style={styles.fontT2}>Olá ... faça seu loguin para entrar !</Text>
      <View style={styles.form}>
        <Input placeholder="E-MAIL..." keyboardType='email-address' />
        <Input placeholder="SENHA..." keyboardType='numeric' secureTextEntry />
        <Btn label="Logar" />
      </View >
      <View style={styles.center}>
        <Text>Caso não tenha conta, cadatre-se aqui.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontT1: {
    color: '#17173f',
    fontSize: 30,
    fontWeight: 900,
  },
  fontT2: {
    color: '#a11e1e',
    fontSize: 22,
    fontWeight: 600,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 60,
  },
  form: {
    marginTop: 30,
    gap: 15,
  }
})