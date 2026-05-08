import { StyleSheet } from "react-native";

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

export { styles };
