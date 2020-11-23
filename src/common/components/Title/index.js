import React from 'react';
import {View,Text,TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const Title = ({
    title,
    editable,
    placeholder,
    value,
    onChangeText,
    style
}) => {
  return (
    <View testID="title-container" style={styles.container}>
        <Text>{title}</Text>
        <TextInput 
            testID="title-input"
            editable={editable}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={style}
        />
    </View>
  );
};

Title.defaultProps = {
    title: '',
    editable: false,
    placeholder: '',
    multiline: false,
    value: '',
    onChangeText: () => null,
};

Title.propTypes = {
    title: PropTypes.string, 
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    style: PropTypes.object.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
}

export default Title;

