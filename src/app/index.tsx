import { Link, router } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';

import { Btn } from '@/components/Button';
import { Input } from '@/components/Input';
import { styles } from '@/styles/styles';

export default function App() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require("../images/diferentes-bem-vindo.png")} style={styles.image} />
                <Text style={styles.fontT1}>Logar...</Text>
                <Text style={styles.fontT2}>Olá ... faça seu loguin para entrar !</Text>
                <View style={styles.form}>
                    <Input placeholder="E-MAIL..." keyboardType='email-address' />
                    <Input placeholder="SENHA..." keyboardType='numeric' secureTextEntry />
                    <Btn label="Logar" onPress={()=>{router.navigate('/home')}}/>
                </View >
            </ScrollView>
            <View style={styles.center}>
                <Text>Caso não tenha conta, <Link style={styles.link} href={'/login'} >cadatre-se aqui.</Link></Text>
            </View>
        </View>
    );
}

