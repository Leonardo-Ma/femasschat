import { StyleSheet, StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  femasschat: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: statusBar,
    marginBottom: 10,
  },
  box: {
    backgroundColor: 'orange',
    width: '80%',
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  userIcon: {
    marginBottom: 10,
  },
  userName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  newConversationButton: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  newConversationButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  returnButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});
