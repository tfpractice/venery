import axios from 'axios';
import nlp from 'compromise';
import { hasWord, } from './wordnik';
import { filtBy, getData, mapTo, } from './thenable';

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

const taxData = ({ vernacularNames, order, family, species, canonicalName, }) =>
 ({
  vernacularNames, order, family, species, canonicalName,
 });

const getResults = ({ results = [], } = {}) => results;

export const engVern = ({ language, }) => language === 'eng';
export const matchVernacular = animal => ({ vernacularName, }) => hasWord(animal)(vernacularName);
export const hasVernacular = ({ vernacularNames, }) => vernacularNames.length;
export const vMatch = animal => ({ vernacularNames, }) => {
  const a = 0;

  // console.log(' vernacularNames.filter(hasWord(animal))', vernacularNames.filter(matchVernacular(animal)));

  return vernacularNames.filter(engVern).filter(matchVernacular(animal)).length;
};

export const getSpecies = q =>
  axios.get(TAX_SEARCH_URL, { params: { q: singular(q), rank, facet: 'rank', higherTaxonKey, }, })
    .then(getData)
    .then(getResults)
    .then(filtBy(hasVernacular))
    .then(filtBy(vMatch(q)))
    .then(mapTo(taxData))
    .then(fd => console.log('fd', fd) || fd);
    
