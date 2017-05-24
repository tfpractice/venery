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
const limitPerRelationshipType = 10;
const defParams = {
 limit,
 useCanonical,
 includeRelated,
 api_key,
};
const synParams = {
 useCanonical,
 limitPerRelationshipType,
 api_key,
};

export const defData = ({ text, attributionText: source, }) => ({ text, source, });
export const getDefText = ({ text, }) => text;
export const hasWord = word => def => nlp(def).normalize().match(forms(word)).found;
  
export const lacksWord = word => def => !hasWord(word)(def);
export const defLacksWord = word => ({ text, }) => !hasWord(word)(text);

export const SYN_TYPES = new Set([
  'same-context', 'hypernym', 'synonym', 'rhyme',
]);

export const hasType = ({ relationshipType, }) => SYN_TYPES.has(relationshipType);
export const requestDef = word =>
  axios.get(`${WORDNIK_BASE}/${word}/definitions`, { params: defParams, })
    .then(({ data, }) => data);
    
export const requestSyn = word =>
  axios.get(`${WORDNIK_BASE}/${word}/relatedWords`, { params: synParams, })
    .then(({ data, }) => data);
    
