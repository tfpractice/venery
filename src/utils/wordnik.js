import axios from 'axios';
import nlp from 'compromise';
export const WORDNIK_BASE = 'http://api.wordnik.com:80/v4/word.json';
export const API_KEY = process.env.REACT_APP_VENERY_WORDNIK_KEY;
const api_key = API_KEY;

const nounData = word => nlp(word).nouns().data()[0];

const forms = word => [ nounData(word).singular, nounData(word).plural, ];

const limit = 10;
const partOfSpeech = 'noun';
const useCanonical = true;
const includeRelated = true;
const params = {
 limit,
 useCanonical,
 includeRelated,
 api_key,
};

export const defData = ({ text, attributionText: source, }) => ({ text, source, });
export const getDefText = ({ text, }) => text;
export const hasWord = word => def => nlp(def).normalize().match(forms(word)).found;
  
export const lacksWord = word => def => !hasWord(word)(def);
export const defLacksWord = word => ({ text, }) => !hasWord(word)(text);

export const requestDef = word =>
  axios.get(`${WORDNIK_BASE}/${word}/definitions`, { params, })
    .then(({ data, }) => data);
    
requestDef('exaltation').then(defs => console.log('defs', defs) || defs);
