import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

const HeaderLeft = ({onPress}) => {
    return (
      <TouchableOpacity 
        onPress={onPress} 
        style={styles.container}
      >
        <Icon name="chevron-left" size={25} color="#000000" />
      </TouchableOpacity>
    )
}

HeaderLeft.defaultProps = {
    onPress: () => null
}

HeaderLeft.propTypes = {
    onPress: PropTypes.func
}

export default HeaderLeft;
