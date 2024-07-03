import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { router } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>index</Text>


      <View className='flex justify-between'>
        <Button onPress={()=>{
            router.push('/profile/EditProfile')
        }}>
            editProfile
        </Button>
        <Button>
            DeleteProfile
        </Button>
      </View>
    </View>
  )
}