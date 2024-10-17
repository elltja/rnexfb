import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const TaskItem = (props) => {

    const [checked, setChecked] = useState(props.checked);

    const handleCheck = async () => {
        const newChecked = !checked;
        setChecked(newChecked);


        try {
            const response = await fetch(`http://192.168.1.108:3000/api/taskitems?checked=${newChecked}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            console.log('Success:', result);

        } catch (err) {
            console.error('Error fetching tasks:', err);
            setChecked(!newChecked);
        }
    };



    return (
        <Wrapper>
            <CheckBox>
                <Check onPress={handleCheck} checked={checked} />
            </CheckBox>
            <Text>{props.text}</Text>
        </Wrapper>
    );
};

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
`;

const CheckBox = styled.View`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Check = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.checked ? 'red' : 'white')};
  border: 1px solid black;
  border-radius: 5px;
`;

export default TaskItem;
