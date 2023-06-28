import { StyleSheet, StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: statusBar + 20,
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
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
    color: 'yellow',
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 16,
    alignSelf: "center",
    fontWeight: "bold"
  },
  returnButton: {
    position: 'absolute',
    top: statusBar,
    left: 20,
  },
  userItem: { 
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 1,
  },
  userInfo: {
    backgroundColor: 'orange',
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  userEmail: {
    fontSize: 14,
    color: 'black',
  },
  userPhone: {
    fontSize: 14,
    color: 'black',
  },
});