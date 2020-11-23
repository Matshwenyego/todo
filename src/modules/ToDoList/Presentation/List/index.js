import React from 'react';
import {View,FlatList} from 'react-native';
import {RenderItem} from './Presentation';
import { styles } from '../../styles';

const List = ({
    data,
    extraData,
    keyExtractor,
    value,
    onValueChange,
    onListPress,
    onDeletePress
}) => {
  return (
    <View testID="list-container" style={styles.container}>
        <FlatList
            testID="list"
            data={data}
            extraData={extraData}
            renderItem={({item}) => (
                <RenderItem 
                    value={value}
                    onValueChange={onValueChange}
                    onListPress={onListPress}
                    onDeletePress={onDeletePress}
                    item={item}
                />
            )}
            keyExtractor={keyExtractor}
        />
    </View>
  );
};

export default List;
