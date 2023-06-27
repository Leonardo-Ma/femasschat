import { StyleSheet, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  femasschat: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: statusBarHeight,
    marginBottom: 10,
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'orange',
    width: '80%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  minimumCharacterText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  returnButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 1,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
