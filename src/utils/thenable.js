export { getData, } from './requests';
export const mapTo = fn => coll => coll.map(fn);
export const filtBy = fn => coll => coll.filter(fn);
export const callOn = arg => fn => fn(arg);
