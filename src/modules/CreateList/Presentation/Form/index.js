import React from 'react';
import {Components} from 'common';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const {Title,Details} = Components;

const Form = ({title,onTitleChange,details,onDetailsChange}) => {
  return (
    <View testID="form-component" style={styles.container}>
        <Title
            title={"TASK TITLE: "}
            editable={true}
            value={title}
            onChangeText={onTitleChange}
            style={styles.textinput}
        />
        <Details
            details={"TASK DETAILS:"}
            editable={true}
            multiline={true}
            value={details}
            onChangeText={onDetailsChange}
            style={styles.textinput}
        />
    </View>
  );
};

Form.defaultProps = {
    title: '',
    onTitleChange: () => null,
    details: '',
    onDetailsChange: () => null,
};

Form.propTypes = {
    title: PropTypes.string,
    onTitleChange: PropTypes.func,
    details: PropTypes.string,
    onDetailsChange: PropTypes.func
};

export default Form;
