import React from 'react';
import {View,Text,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const Details = ({
    details, 
    editable,
    placeholder,
    multiline,
    style,
    value,
    onChangeText
}) => {
  return (
    <View testID="details-container" style={styles.container}>
        <Text>{details}</Text>
        <TextInput 
            testID="details-input"
            editable={editable}
            placeholder={placeholder}
            multiline={multiline}
            style={style}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
  );
};

Details.defaultProps = {
    details: '',
    editable: false,
    placeholder: '',
    multiline: false,
    value: '',
    onChangeText: () => null,
};

Details.propTypes = {
    details: PropTypes.string, 
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    style: PropTypes.object.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};

export default Details;
