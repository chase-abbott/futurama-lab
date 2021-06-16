
import fetch from 'node-fetch';

export const getQuotes = (character) => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(response => mungeData(character, response));
};

const mungeData = (character, data) => {
  const filteredData = data.filter(characterItem => characterItem.character === character);
  const chosenQuoteIndex = Math.floor(Math.random() * filteredData.length);
  
  return filteredData[chosenQuoteIndex].quote;
};

