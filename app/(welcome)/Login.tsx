import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function Login() {
    const router=useRouter()
  return (
    <View>
      <Button onPress={()=>router.replace('/(drawer)')}>
        got to home
      </Button>
    </View>
  )
}