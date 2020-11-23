import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
      flex: 0.1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    textinput: {
      borderWidth: 1, 
      borderRadius: 4, 
      width: '92%', 
      height:'50%', 
      textAlign: 'center',
    },
    detailsContainer: {
      flex: 0.9, 
      alignItems: 'center',
    },
});

export {styles};