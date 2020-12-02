import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import ResultsList from './components/ResultsList';
import Bar from './components/SearchBar';
import useResults from './hooks/useResults';
function SearchScreen({navigation}) {
  const {navigate} = navigation;
  const [term, setTerm] = useState('');
  const [searchApi, results] = useResults();
  const filteredResults = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    <>
      <Bar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onSubmit={() => searchApi(term)}
      />
      {results.length === 0 ? <Text>Nothing found</Text> : null}

      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filteredResults('$')}
          navigate={navigate}
        />
        <ResultsList
          title="Big Pricier"
          results={filteredResults('$$')}
          navigate={navigate}
        />
        <ResultsList
          title="Big Spender"
          results={filteredResults('$$$$')}
          navigate={navigate}
        />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({});
export default SearchScreen;
