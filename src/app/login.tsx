import { Link } from 'expo-router';
import { Alert, Image, ScrollView, Text, View } from 'react-native';

import { Btn } from '@/components/Button';
import { Input } from '@/components/Input';
import { styles } from '@/styles/styles';

export default function App() {

    function logar() {
        Alert.alert("Conectando...", "Criando a sua conta. Aguarde...")
    }

    return (
        <View style={styles.container}>
                <ScrollView>
                    <Image source={require("../images/bd-representation.png")} style={styles.image} />
                    <Text style={styles.fontT1}>Logar...</Text>
                    <Text style={styles.fontT2}>Olá ... Para criar uma conta confirme seus dados !</Text>
                    <View style={styles.form}>
                        <Input placeholder="Nome" />
                        <Input placeholder="E-MAIL..." keyboardType='email-address' />
                        <Input placeholder="SENHA..." keyboardType='numeric' secureTextEntry />
                        <Input placeholder="CONFIRME SUA SENHA..." keyboardType='numeric' secureTextEntry />
                        <Btn label="Logar" onPress={logar} />
                    </View >
                </ScrollView>
                <View style={styles.center}>
                    <Text>Caso já tenha uma conta, <Link style={styles.link} href={'/'} >entre por aqui.</Link></Text>
                </View>
        </View>
    );
}

