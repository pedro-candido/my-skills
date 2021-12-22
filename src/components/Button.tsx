/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, ...rest}: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.addButton} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#3085c9',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Button;
