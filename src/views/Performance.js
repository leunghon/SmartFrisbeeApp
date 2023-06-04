import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '../../firebase'; // update this path to where your firebase.js file is located

const Performance = () => {
  const [throws, setThrows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.database();
      
      db.ref('/throws').on('value', (querySnapShot) => {
        let data = querySnapShot.val();
        let throwsArr = [];

        for(let throwId in data){
          let type = data[throwId].ThrowType === 1 ? 'Good throw' : 'Bad throw';
          throwsArr.push({
            id: data[throwId].id,
            type: type
          });
        }

        setThrows(throwsArr);
      });
    };

    fetchData();

    // Unsubscribe from events when no longer in use
    return () => {
      const db = firebase.database();
      db.ref('/throws').off();
    }
  }, []);

  return (
    <View>
      {throws.map(throwItem => (
        <View key={throwItem.id}>
          <Text>ID: {throwItem.id}, Type: {throwItem.type}</Text> 
        </View>
      ))}
    </View>
  );
}

export default Performance;
