import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';

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
      <Button text={'Add'} onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginTop: 20 }]}>My skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
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
  input: {
    padding: 15,
    backgroundColor: '#242121',
    marginBottom: 15,
    borderRadius: 5,
    color: '#fff',
  },

});

export default Home;
