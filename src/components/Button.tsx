import {StyleSheet, Text,TouchableOpacity, TouchableOpacityProps} from "react-native"

type Btnprops=TouchableOpacityProps&{label:string};

export function Btn({label, ...rest} : Btnprops){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.4} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height: 30,
        backgroundColor:'#a11e1e',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    label:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:600,
    }
})