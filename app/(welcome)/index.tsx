import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import {  useRouter } from 'expo-router'

const Welcome = () => {
  const router=useRouter()
  return (
    <View>
      <Text className='dark:text-white'>jjjj</Text>
      <Button onPress={()=>router.push('/Login')}>
        Login
      </Button>
      <Button onPress={()=>router.push('/SingnUp')}>
       Signup
      </Button>
    </View>
  )
}

export default Welcome