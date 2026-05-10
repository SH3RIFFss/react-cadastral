import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"

import { Btn } from "@/components/Button"
import { Input } from "@/components/Input"
import { styles } from "@/styles/styles"
import { dados } from "./array"

export default function Home() {

    type Itemprops = { id: number, nome: string, quantidade: number }

    const Item = ({ id, nome, quantidade }: Itemprops) => (
        <View style={styles.row}>
            <Text style={{ flex: 0.5 }} >{id}</Text>
            <Text style={{ flex: 2 }} >{nome}</Text>
            <Text style={{ flex: 1 }} >{quantidade}</Text>
        </View>
    )

    return (
        <View style={styleHome.container} >
            <ScrollView>
                <View style={styles.form}>
                    <Input placeholder='Pesquisar...' />
                    <Btn label="procurar" />
                </View>
            </ScrollView>
            <FlatList data={dados} renderItem={({ item }) => <Item id={item.id} nome={item.nome} quantidade={item.quantidade} />} keyExtractor={(item) => item.id.toString()} />
        </View>
    )
}

const styleHome = StyleSheet.create({
    container: {
        backgroundColor: '#2f2f54',
        flex: 1,
        paddingTop: 100,
        padding: 50
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})