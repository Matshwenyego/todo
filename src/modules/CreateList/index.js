import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import addData from '../../store/actions/add-data';

import {
  Form,
  AddButton
} from './Presentation';
import {styles} from './styles';

const CreateList = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const onCreate = async () => {
    if (title.length > 0 && details.length > 0) {
      const data = await AsyncStorage.getItem('data');
      if (JSON.parse(data) !== null) {
        const task = [];
        task.push(
            ...JSON.parse(data),{
            id: `${JSON.parse(data).length}`+ details,
            title: title,
            details: details,
          }
        );
        const store = await dispatch(addData(task));
        await AsyncStorage.setItem('data', JSON.stringify(store.payload.tasks));
        navigation.navigate('List');
      } else {
        const task = [{
          id: title + ' 0 ' + details,
          title: title,
          details: details,
        }];
        const store = await dispatch(addData(task));
        await AsyncStorage.setItem('data', JSON.stringify(store.payload.tasks));
        navigation.navigate('List');
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Form 
          title={title}
          onTitleChange={text => setTitle(text)}
          details={details}
          onDetailsChange={text => setDetails(text)}
        />
        <AddButton onCreatePress={() => onCreate()}/>
      </SafeAreaView>
    </>
  );
};

export default CreateList;
