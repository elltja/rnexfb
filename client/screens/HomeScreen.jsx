import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native'; 
import useFetch from '../hooks/useFetch';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const taskItems = useFetch('taskitems'); 

  return (
    <Container bgc="#FFFFFF">
      {taskItems && taskItems.length > 0 ? (
        taskItems.map((item) => (
          <TaskItem key={item.id} text={item.text} checked={item.checked} />
        ))
      ) : (
        <Text>No tasks available</Text>
      )}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.bgc};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default HomeScreen;
