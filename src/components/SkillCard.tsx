import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({skill, ...rest}: ISkillCardProps) => {
  return (
    <TouchableOpacity style={styles.skillButton} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#242121',
    marginBottom: 10,
    padding: 20,
    borderRadius: 7,
  },
  skillText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default SkillCard;
