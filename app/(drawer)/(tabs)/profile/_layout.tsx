import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
       <Stack.Screen name="index" options={{title: 'indexPage',headerShown:false}} /> 
    <Stack.Screen name="EditProfile"  options={{title: 'EditProfile'}} />
    

</Stack>
  )
}