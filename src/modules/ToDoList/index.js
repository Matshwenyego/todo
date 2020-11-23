import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  List,
  AddButton
} from './Presentation';
import {styles} from './styles';
import fetchData from '../../store/actions/fetch-data';
import removeData from '../../store/actions/remove-data';

const ToDoList = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);

  useEffect(() => {
    getTasks();
    return () => {}
  }, [data]);

  const create = () => {
    navigation.navigate('Create');
  }

  const viewTask = (item) => {
    navigation.navigate('Task',{item});
  }

  const getTasks = async () => {
    const data = await AsyncStorage.getItem('data');
    if (JSON.parse(data) !== null) {
      const store = await dispatch(fetchData(JSON.parse(data)));
      await AsyncStorage.setItem('data', JSON.stringify(store.payload.tasks));
      setData(store.payload.tasks);
    }
  }

  const onDelete = async (item) => {
    const store = await dispatch(removeData(item));
    setData(store.payload.task);
    await AsyncStorage.setItem('data', JSON.stringify(store.payload.task));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <List 
          data={data}
          extraData={data}
          keyExtractor={(item) => item.id}
          value={value}
          onValueChange={text => setValue(text)}
          onListPress={(item) => viewTask(item)}
          onDeletePress={(item) => onDelete(item)}
        />
        <AddButton onAddPress={() => create()}/>
      </SafeAreaView>
    </>
  );
};

export default ToDoList;
