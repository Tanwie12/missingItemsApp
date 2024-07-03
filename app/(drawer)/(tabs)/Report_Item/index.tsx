import { View, Text } from 'react-native'
import React from 'react'
import { Appbar, Button as ButtonP } from 'react-native-paper'
import { useRouter } from 'expo-router'
import Button from '@/components/Button'

export default function index() {
  const router=useRouter()
  return (
    <View>
     <Appbar.Header mode='center-aligned' style={{backgroundColor:'none'}}  theme={{ colors: { primary: 'green' } }}>
    <Appbar.BackAction onPress={() => {router.replace('/')}} />
    <Appbar.Content title="Report Item" />
   

  </Appbar.Header>
  <Button color='blue'> Done</Button>
  <ButtonP style={{}} icon="pen" buttonColor='green' mode="contained" onPress={() => router.push('/message/notification')}>done</ButtonP>
    </View>
  )
}