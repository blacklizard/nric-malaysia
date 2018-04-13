import NRIC from './nric';

export default class NRICUtil {
  constructor(nric) {
    if (typeof nric === 'undefined' || (typeof nric === 'string' && nric.length === 0)) {
      throw new Error('nric number is required');
    }

    this.nric = nric.match(/^(\d{6})-?(\d{2})-?(\d{4})$/);

    if (!this.nric) {
      throw new Error('Invalid nric format');
    }

    return new NRIC(this.nric[1], this.nric[2], this.nric[3]);
  }
}
