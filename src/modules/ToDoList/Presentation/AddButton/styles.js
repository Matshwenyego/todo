import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 0.1, 
      flexDirection: 'row'
    },
    placeHolder: {
      flex: 0.8
    },
    buttonContainer: {
      flex: 0.2, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    button:{
      height: 50, 
      width: 50, 
      borderRadius: 25, 
      backgroundColor: '#9AE1CA',
      justifyContent: 'center', 
      alignItems: 'center',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      },
});

export {styles};