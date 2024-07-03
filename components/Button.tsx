import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  color: string;
};

const Button = ({ children, color }: Props) => {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 25, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
