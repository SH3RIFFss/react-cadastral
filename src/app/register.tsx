
import { router } from "expo-router"
import { ScrollView, Text, View } from "react-native"

import { Btn } from "@/components/Button"
import { Input } from "@/components/Input"
import { styles } from "@/styles/styles"

export default function Register() {
    return (
        <View style={[styles.containerPages, styles.dark]}>
            <ScrollView>
                <View>
                    <Btn label="Home" onPress={() => router.navigate('/home')} />
                </View>
                <View>
                    <View style={[styles.form, { backgroundColor: '#c2c2c2', borderRadius: 10, padding: 5, alignItems: 'center' }]}>
                        <Text style={styles.fontT1}>Cadastrar produto...</Text>
                        <Text style={styles.fontT2}>Olá ... Insira os dados para cadastrar um produto !</Text>
                    </View>
                    <View style={styles.form}>
                        <Input placeholder="Nome do produto" />
                        <Input placeholder="Quantidade em estoque" keyboardType='numeric' />
                        <Input placeholder="Tipo do produto" />
                        <Input placeholder="Setor de consumo" />
                        <Btn label="cadastrar" onPress={() => router.navigate('/home')} />
                            {/* retornar um modal com uma preview dos dados e um btn de confirmação */}
                    </View >
                </View>
                <View>
                    <View style={[styles.form, { backgroundColor: '#c2c2c2', borderRadius: 10, padding: 5, alignItems: 'center' }]}>
                        <Text style={styles.fontT1}>Editar produto...</Text>
                        <Text style={styles.fontT2}>Olá ... Insira os dados para editar um produto !</Text>
                    </View>
                    <View style={styles.form}>
                        <Input placeholder="código identificador (ID)" keyboardType='numeric' />
                        <Btn label="Procurar" onPress={() => router.navigate('/home')} />
                            {/* reornar o elemento para a edição das suas informações com sua logica de ediçao do produto */}
                    </View >
                </View>
                <View>
                    <View style={[styles.form, { backgroundColor: '#c2c2c2', borderRadius: 10, padding: 5, alignItems: 'center' }]}>
                        <Text style={styles.fontT1}>Deletar produto...</Text>
                        <Text style={styles.fontT2}>Olá ... Insira os dados para deletar um produto !</Text>
                    </View>
                    <View style={styles.form}>
                        <Input placeholder="código identificador (ID)" keyboardType='numeric' />
                        <Btn label="Procurar" onPress={() => router.navigate('/home')} />
                            {/* retornar o elemento a ser deletado e um btn de confirmação */}
                    </View >
                </View>
            </ScrollView>
        </View>
    )
}

