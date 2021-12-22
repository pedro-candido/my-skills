import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';

interface IMySkillsProps {
  id: string;
  name: string;
}

const Home = (): JSX.Element => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<IMySkillsProps[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    const data: IMySkillsProps = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  };

  useEffect(() => {
    let hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, Pedro</Text>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={'Type your skill'}
        placeholderTextColor={'#fff'}
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button text={'Add'} onPress={handleAddNewSkill} />
      <Text style={[styles.title, styles.titleSkill]}>My skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <SkillCard
            activeOpacity={0.7}
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
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
  },
  input: {
    padding: 15,
    backgroundColor: '#242121',
    marginBottom: 15,
    borderRadius: 5,
    color: '#fff',
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
  },
  header: {
    marginBottom: 20,
  },
  titleSkill: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Home;
