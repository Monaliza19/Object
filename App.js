import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const info = [
  {
  
      firstName: "ROGEL",
      lastName: "GARCIA",
      nickname: "GEL",
      course: "BS INFO TECH",
      year: "3RD YEAR"
    },
    {
        
        firstName: "CHRISTINE",
        lastName: "PADONIA",
        nickname: "TIN",
        course: "BS INFO TECH",
        year: "3RD YEAR"
    },
    {
       
        firstName: " SHEN SHEN",
       lastName:"PAQUINOL",
       nickname:"SHEN",
       course: "BS INFO TECH",
       year: "3RD YEAR"
    },
    {
        
        firstName: "RIZA",
       lastName:"BATULANON",
       nickname:"RIZ",
       course: "BS INFO TECH",
       year: "3RD YEAR"
    },
    {
       
        firstName: "KIM",
       lastName: "COMEGHOD",
       nickname:"KIM",
       course: "BS INFO TECH",
       year: "3RD YEAR"
    },
    {
        
        firstName: "PEARL ANGELIE",
       lastName: "LANSANG",
       nickname: "PEARL",
       course: "BS INFO TECH",
       year: "3RD YEAR"
    },
    {
        
        firstName: "CLARENCE JHON",
        lastName:"QUIJANO",
        nickname: "CJ",
        course: "BS INFO TECH",
        year: "3RD YEAR"
    },
    {
        
       firstName: " MONALIZA",
       lastName: "LIPARTO",
       nickname:"DAY",
       course: "BS INFO TECH",
       year: "3RD YEAR"
        
    },
    {
       
        firstName: "JHANNEL",
        lastName: "QUISQUIRIN",
        nickname: "NEL",
        course: "BS INFO TECH",
        year: "3RD YEAR"
    },
    {
        
        firstName: "FLORA MAE",
       lastName:"REQUILLO",
       nickname: "FLOR",
       course: "BS INFO TECH",
       year: "3RD YEAR"
    },
    {
       
        firstName: "JHONMARK",
        lastName: "LAGRIMAS",
        nickname: "MAK",
        course: "BS INFO TECH",
        year: "3RD YEAR"
        
    },
    {
        
        firstName: "KARL PATRICK",
        lastName: "LOQUIAS",
        nickname: "KARL",
        course: "BS INFO TECH",
        year: "3RD YEAR"
    },
];


const App = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedInfo(item)}>
      <View style={styles.nicknameButton}>
        <Text>{item.nickname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>NICKNAMES</Text>
      <FlatList
        data={info}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} 
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, color: 'green' }}>
        SELECTED INFORMATION
      </Text>
      <ScrollView>
        {selectedInfo && (
          <View style={{ padding: 8, }}>
            
            <Text>FirstName: {selectedInfo.firstName}</Text>
            <Text>LastName: {selectedInfo.lastName}</Text>
            <Text>Nickname: {selectedInfo.nickname}</Text>
            <Text>Course: {selectedInfo.course}</Text>
            <Text>Year: {selectedInfo.year}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = {
  nicknameButton: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
  },
};

export default App;