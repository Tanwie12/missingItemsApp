import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{title: "welcome"}}/>
        <Stack.Screen name="SingnUp" options={{title: "sinup"}}/>
        <Stack.Screen name="Login" options={{title: "Login"}}/>
    </Stack>
  )
}