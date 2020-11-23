import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {styles} from './styles';

const AddButton = ({onAddPress}) => {
  return (
    <View testID="add-button-container" style={styles.container}>
        <View style={styles.placeHolder}/>
        <View style={styles.buttonContainer}>
            <TouchableOpacity testID="add-button" onPress={onAddPress} style={styles.button}>
                <Icon name="plus" size={25} color="#000000" />
            </TouchableOpacity>
        </View>
    </View>
  );
};

AddButton.defaultProps = {
  onAddPress: () => null,
};

AddButton.propTypes = {
  onAddPress: PropTypes.func, 
};


export default AddButton;
