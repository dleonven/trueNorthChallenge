
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
    },
    infoText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
    },
    button: {
        width: '100%',
        height: 42,
        backgroundColor: '#1FC4DB',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Inter-Medium',
        fontSize: 16
    },
    itemContainer: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 18,
        paddingTop: 20,
        paddingBottom: 18,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 8
    },
});