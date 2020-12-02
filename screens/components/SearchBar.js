import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function SearchBar({term, onTermChange, onSubmit}) {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="search"
        style={style.inputStyle}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f1edda',
    height: 50,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
export default SearchBar;
