import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const AddButton = ({onCreatePress}) => {
  return (
    <View testID="add-button-container" style={styles.container}>
        <View style={styles.placeHolder}/>
        <View style={styles.buttonContainer}>
            <TouchableOpacity testID="add-button" onPress={onCreatePress} style={styles.button}>
                <Text>Create</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

AddButton.defaultProps = {
  onCreatePress: () => null,
};

AddButton.propTypes = {
  onCreatePress: PropTypes.func, 
};

export default AddButton;
