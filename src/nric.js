import moment from 'moment';

export default class NRIC {
  constructor(dob, state, end) {
    this.rawDOB = dob;
    this.rawState = state;
    this.rawEnd = end;

    // extracted from http://www.jpn.gov.my/en/kod-negeri/
    this.states = {
      '01|21|22|23|24': 'Johor',
      '02|25|26|27': 'Kedah',
      '03|28|29': 'Kelantan',
      '04|30': 'Melaka',
      '05|31|59': 'Negeri Sembilan',
      '06|32|33': 'Pahang',
      '07|34|35': 'Pulau Pinang',
      '08|36|37|38|39': 'Perak',
      '09|40': 'Perlis',
      '10|41|42|43|44': 'Selangor',
      '11|45|46': 'Terengganu',
      '12|47|48|49': 'Sabah',
      '13|50|51|52|53': 'Sarawak',
      '14|54|55|56|57': 'Wilayah Persekutuan (Kuala Lumpur)',
      '15|58': 'Wilayah Persekutuan (Labuan)',
      16: 'Wilayah Persekutuan (Putrajaya)',
      82: 'Negeri Tidak Diketahui',
    };
  }

  isValid() {
    return !!(this.getDateOfBirth() && this.getState());
  }

  getDateOfBirth() {
    const dobMoment = moment(this.rawDOB, 'YYMMDD');
    if (dobMoment.isValid()) {
      return dobMoment.format('YYYY-MM-DD');
    }
    return false;
  }

  getState() {
    let state = null;
    Object.keys(this.states).some((key) => {
      if (key.split('|').indexOf(this.rawState) !== -1) {
        state = this.states[key];
        return this.states[key];
      }
    });

    return state;
  }

  getGender() {
    return Number(this.rawEnd.slice(-1)) % 2 === 0 ? 'female' : 'male';
  }

  get getRawInput() {
    return this.rawDOB + this.rawState + this.rawEnd;
  }
}
