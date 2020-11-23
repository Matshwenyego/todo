import React from 'react';
import {View} from 'react-native';
import {Components} from 'common';
import PropTypes from 'prop-types';
import {styles} from './styles';

const {Title,Details} = Components;

const Form = ({title,details}) => {
  return (
    <View testID="form-component" style={styles.container}>
        <Title
            editable={false}
            placeholder={title}
            style={styles.textinput}
        />
        <Details
            placeholder={details}
            multiline={true}
            style={styles.textinput}
        />
    </View>
  );
};

Form.defaultProps = {
    title: '',
    details: '',
};

Form.propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
};


export default Form;
