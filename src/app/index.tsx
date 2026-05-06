import { Link } from 'expo-router';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Btn } from '@/components/Button';
import { Input } from '@/components/Input';

export default function App() {

    function logar(){
        Alert.alert("Logando...","Entrando com a sua conta. Aguarde...")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require("../images/diferentes-bem-vindo.png")} style={styles.image} />
                <Text style={styles.fontT1}>Logar...</Text>
                <Text style={styles.fontT2}>Olá ... faça seu loguin para entrar !</Text>
                <View style={styles.form}>
                    <Input placeholder="E-MAIL..." keyboardType='email-address' />
                    <Input placeholder="SENHA..." keyboardType='numeric' secureTextEntry />
                    <Btn label="Logar" onPress={logar} />
                </View >
            </ScrollView>
            <View style={styles.center}>
                <Text>Caso não tenha conta, <Link style={styles.link} href={'/home'} >cadatre-se aqui.</Link></Text>
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
    },
    link: {
        color: '#ff0000',
        fontWeight: 600,
    }
})