import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'White',
    },
    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        alignItems: 'center',
        justifyContent: 'center'


    },
    boxMid: {
        width: '100%',
        height: Dimensions.get('window').height/4,
        paddingHorizontal: 37,

    },
    boxBottom: {
        width: '100%',
        height: Dimensions.get('window').height/3,

    }, logo:{
        width: 80,
        height: 80,
    },
    text : {
        fontWeight:'bold',
        marginTop: 40,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 8,
        flexDirection: 'row'
    }
});