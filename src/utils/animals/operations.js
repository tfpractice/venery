import * as nlp from 'compromise';
import { addBinMap, asMap, diff, first, spreadK, spreadV, } from 'fenugreek-collections';
import { ANIMARR, } from './data';

const normAnimal = animal => nlp(animal).normalize().out('normal');
const normTerms = terms => nlp(terms).nouns().normalize().sort('frequency').out('array');
const normalizePair = ([ k, v, ]) => [ normAnimal(k), normTerms(v), ];

export const ANIMAP = ANIMARR.map(normalizePair).reduce(addBinMap, asMap());
export const ANIMALS = spreadK(ANIMAP);
export const NAMES = spreadV(ANIMAP);
export const FirstNames = NAMES.map(first);
export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

export const getXRandom = (coll, count) => {
  let results = [];

  while (results.length < count) {
    results = results.concat(getRandom(diff(coll)(results)));
  }
  return results;
};
export const getNewAnimals = (count = 10) => getXRandom(ANIMALS, count);
export const getGroupName = animal => first(ANIMAP.get(animal));

// export const ALL_NAMES = NAMES.reduce((a = [], c) => a.concat(c), [])
// .filter(hasFreq(new Set(missingGroups)));
//
// const getMaxGroup = (animal) => {
//   freqMap(...ANIMAP.get(animal).filter(hasFreq(new Set(missingGroups))))
//     .then(sortFQ)
//     .then((c) => { console.log('c', c); return c; })
//     .then(first)
//     .then(f => new Map().set(animal, f))
//     .catch(console.error);
// };
//
// export const sortedMap = anims => Promise.all(anims.map(getMaxGroup));
// export * from './data';
