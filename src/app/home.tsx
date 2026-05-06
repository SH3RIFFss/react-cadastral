import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ooooopa, bem vindo a tela de home, <Link href={'/'} style={styles.link}>Clique aqui para voltar</Link></Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#17173f',
    },
    text:{
        color:'#ffffff'
    },
    link:{
    color:'#ff0000',
    fontWeight:600,
  }
}) 