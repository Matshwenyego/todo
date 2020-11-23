import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {styles} from './styles';

const RenderItem = ({value,onValueChange,onListPress,onDeletePress,item}) => {
  return (
    <View testID="task-container" style={styles.container}>
        <View style={styles.checkButton}>
            <CheckBox
                testID="checkout"
                onCheckColor={'#9AE1CA'}
                onTintColor={'#9AE1CA'}
                value={value}
                boxType={'square'}
                onValueChange={onValueChange}
            />
        </View>
        <TouchableOpacity testID="view-button" onPress={() => onListPress(item)} style={styles.listName}>
            <Text style={{textDecorationLine: value ? 'line-through': null, textDecorationStyle: value ? 'solid': null}}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="delete-button" onPress={() => onDeletePress(item)} style={styles.deleteButton}>
            <Icon name="trash" size={30} color="#000000" />
        </TouchableOpacity>
    </View>
  );
};

RenderItem.defaultProps = {
    value: false,
    onValueChange: () => null,
    onListPress: () => null,
    onDeletePress: () => null,
    item: {title: ''},
};

RenderItem.propTypes = {
    value: PropTypes.bool, 
    onValueChange: PropTypes.func, 
    onListPress: PropTypes.func, 
    onDeletePress: PropTypes.func, 
    item: PropTypes.object, 
};

export default RenderItem;
