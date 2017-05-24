import * as nlp from 'compromise';
import { addBinMap, asMap, diff, first, spreadK, spreadV, } from 'fenugreek-collections';
import { ANIMARR, } from './data';

export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export const getXRandom = (coll, count) => {
  let results = [];

  while (results.length < count) {
    results = results.concat(getRandom(diff(coll)(results)));
  }
  return results;
};

const normAnimal = animal =>
  nlp(animal).normalize().out('normal');
  
const normTerms = terms =>
  nlp(terms).nouns().normalize().sort('frequency').out('array');
  
const normalizePair = ([ k, v, ]) => [ normAnimal(k), normTerms(v), ];

export const ANIMAP = ANIMARR.map(normalizePair).reduce(addBinMap, asMap());
export const ANIMALS = spreadK(ANIMAP);
export const NAMES = spreadV(ANIMAP);
export const FirstNames = NAMES.map(first);

export const getNewAnimals = (count = 10) => getXRandom(ANIMALS, count);
export const getGroupName = animal => first(ANIMAP.get(animal));
