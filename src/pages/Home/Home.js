import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Home = () => {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill])
    setNewSkill('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Pedro</Text>
      <TextInput
        style={styles.input}
        placeholder={'Type your skill'}
        placeholderTextColor={'#fff'}
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={handleAddNewSkill}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 20 }]}>My skills</Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity activeOpacity={0.8} key={index} style={styles.skillButton}>

          <Text style={styles.skillText}  >{skill}</Text>
        </TouchableOpacity>

      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    backgroundColor: '#101210',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
    marginBottom: 20,
  },
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
  input: {
    padding: 15,
    backgroundColor: '#242121',
    marginBottom: 15,
    borderRadius: 5,
    color: '#fff',
  },
  skillButton: {
    backgroundColor: '#242121',
    marginBottom: 10,
    padding: 12,
    borderRadius: 7,
  },
  skillText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16
  }
});

export default Home;
