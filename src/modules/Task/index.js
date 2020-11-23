import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Form} from './Presentation';
import {styles} from './styles';

const Task = ({route}) => {
  const {item} = route.params;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Form title={item.title} details={item.details} />
      </SafeAreaView>
    </>
  );
};

export default Task;
