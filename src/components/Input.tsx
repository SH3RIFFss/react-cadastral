import { StyleSheet, TextInput } from "react-native";

export function Input({...rest}) {
    return <TextInput style={styles.Input} {...rest}/>
}
const styles = StyleSheet.create({
    Input: {
        width:'100%',
        height:40,
        backgroundColor: '#c2c2c2',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:15,
    }
})