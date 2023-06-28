import { StyleSheet, StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: statusBar + 40,
    paddingHorizontal: 16,
  },
  box: {
    backgroundColor: 'orange',
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'auto',
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  messageText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  newConversationButton: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'orange',
    width: '80%',
    borderRadius: 8,
    padding: 10,
    margin: 50,
    marginBottom: 20,
  },
  newConversationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  returnButton: {
    position: 'absolute',
    top: statusBar,
    left: 20,
  },
});
