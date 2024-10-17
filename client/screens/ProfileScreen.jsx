import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'
import LoginBox from '../components/LoginBox';
import useFetch from '../hooks/useFetch';

const ProfileScreen = () => {
 
  const [email, setEmail] = useState(null);
  

  return (
    <Container>

      {email != null ?
       <Text>Successfully logged in as {email}</Text> : <LoginBox />}

    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`


export default ProfileScreen