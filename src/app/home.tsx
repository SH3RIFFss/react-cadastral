import { Btn } from "@/components/Button"
import { Input } from "@/components/Input"
import { styles } from "@/styles/styles"
import { router } from "expo-router"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { dados } from "./array"

export default function Home() {

    type Itemprops = { id: number, nome: string, quantidade: number }

    const Item = ({ id, nome, quantidade }: Itemprops) => (
        <View style={styles.row}>
            <Text >{id}</Text>
            <Text >{nome}</Text>
            <Text >{quantidade}</Text>
        </View>
    )

    return (
        <View style={[styles.containerPages, styles.dark]} >
            <View>
                <Btn label="Interagir com produtos" onPress={() => router.navigate('/register')} />
            </View>
            <View style={styles.form}>
                <Input placeholder='Pesquisar...' />
                <Btn label="procurar" />
                <View style={styleHome.row}>
                    <Text >Id</Text>
                    <Text >Nome</Text>
                    <Text >Quantidade</Text>
                </View>
                <FlatList data={dados} renderItem={({ item }) => <Item id={item.id} nome={item.nome} quantidade={item.quantidade} />} keyExtractor={(item) => item.id.toString()} />
            </View>
        </View>
    )
}

const styleHome = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        backgroundColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
    }
})