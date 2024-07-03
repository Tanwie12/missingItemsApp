import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function found() {
    const lostItems = [
        { id: '1', name: 'Bag Pack', location: 'Classroom', time: '2 days ago' },
        { id: '2', name: 'Black Bag Pack', location: 'Classroom', time: '2 days ago' },
        { id: '3', name: 'Umbrella', location: 'Classroom', time: '2 days ago' },
      ];
  return (
    <FlatList
    data={lostItems}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View >
        <Text className='dark:text-white'>{item.name}</Text>
        <Text className='dark:text-white'>{item.location}</Text>
        <Text className='dark:text-white'>{item.time}</Text>
      </View>
    )}
  />
  )
}