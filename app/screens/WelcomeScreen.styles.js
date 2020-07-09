import { StyleSheet, Platform } from 'react-native';
import Colors from '../config/colors';

const platforms = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: 'Avenir',
  },
  android: {
    fontSize: 18,
    fontFamily: 'Roboto',
  },
});

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', // for absolute positioning on the secondary axis for logo
  },
  buttonsContainer: {
    width: '100%',
    height: 100,
    backgroundColor: 'transparent',
    color: Colors.primary,
    // borderWidth: 2,
    // borderColor: '#fff',
    borderBottomWidth: 0,
    padding: 20,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'transparent',
    color: Colors.primary,
    borderWidth: 2,
    borderColor: '#fff',
  },
  logo: {
    //borderWidth: 2,
    // borderColor: Colors.primary,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 30,
  },
  slogan: {
    //borderWidth: 2,
    // borderColor: Colors.primary,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 70,
  },

  card: {
    //borderWidth: 2,
    // borderColor: Colors.primary,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 90,
  },
  sloganText: {
    fontSize: 12,

    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: '200',
  },
  logoText: {
    ...platforms,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: '300',
    fontSize: 28,
  },
});

export default Styles;
