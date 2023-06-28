import { StyleSheet } from 'react-native';

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
    color: 'black',
  },
  input: {
    backgroundColor: 'orange',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'orange',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButtonText: {
    fontSize: 18,
  },
  returnButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  errorMessage: {
    paddingTop: 10,
    fontSize: 18,
  }
});
