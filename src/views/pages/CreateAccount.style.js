import { StatusBar, StyleSheet } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    label: {
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        backgroundColor: 'orange',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        width: '100%',
    },
    registerButton: {
        backgroundColor: 'orange',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    registerButtonText: {
        fontSize: 18,
    },
    returnButton: {
        position: 'absolute',
        top: 25,
        left: 20,
    },
    avatarPreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
    errorMessage: {
        paddingTop: 10,
        fontSize: 18,
    }
});