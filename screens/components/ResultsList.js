import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
function ResultsList({title, results, navigate}) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      {results.length === 0 && (
        <Text style={style.error}>No results found ...</Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigate('Result', {id: item.id})}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  error: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
  container: {
    margin: 10,
  },
});
export default ResultsList;
