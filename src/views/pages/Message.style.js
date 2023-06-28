import { StyleSheet, StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        paddingTop: statusBar + 40,
        paddingHorizontal: 20,
        paddingBottom: 60
    },
    box: {
        backgroundColor: 'orange',
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    messageContent: {
        flex: 1,
    },
    dateTime: {
        fontSize: 10,
        marginLeft: 5
    },
    messageText: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    returnButton: {
        position: 'absolute',
        top: statusBar,
        left: 20,
    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: 'orange',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 8,
    },
});
