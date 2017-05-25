import axios from 'axios';
import nlp from 'compromise';
import { hasWord, } from './wordnik';
export const TAX_BASE_URL = 'http://api.gbif.org/v1/species';
export const TAX_SEARCH_URL = `${TAX_BASE_URL}/search`;
export const TAX_MATCH_URL = `${TAX_BASE_URL}/match`;
export const TAX_SUGGEST_URL = `${TAX_BASE_URL}/suggest`;

const singular = animal => nlp(animal).nouns().toSingular().out();
const rank = 'SPECIES';
const verbose = true;
const kingdom = 'Animalia';
const higherTaxonKey = 1;
const datasetKey = 'cbb6498e-8927-405a-916b-576d00a6289b';

const getResults = ({ results = [], } = {}) => results;
const filtBy = fn => coll => coll.filter(fn);

export const engVern = ({ language, }) => language === 'eng';
export const matchVernacular = animal => ({ vernacularName, }) => hasWord(animal)(vernacularName);
export const hasVernacular = ({ vernacularNames, }) => vernacularNames.length;
export const vMatch = animal => ({ vernacularNames, }) => {
  console.log('vernacularNames', vernacularNames);
  console.log(' vernacularNames.filter(hasWord(animal))', vernacularNames.filter(matchVernacular(animal)));
  return vernacularNames.filter(engVern).filter(matchVernacular(animal)).length;
};

export const binomial = q =>
  axios.get(TAX_SEARCH_URL, { params: { q: singular(q), rank, facet: 'rank', higherTaxonKey, }, })
    .then(({ data, }) => console.log('data', data) || data.results)
    .then(filtBy(hasVernacular))
    .then(filtBy(vMatch(q)))
    .then(fd => console.log('fd', fd) || fd);
    
