const chai = require('chai');
const NRICUtil = require('../dist/nric-malaysia');

const { expect } = chai;

describe('Given invalid NRIC format', () => {
  it('should throw an error', () => {
    let fn = () => {
      new NRICUtil('abc');
    };
    expect(fn).to.throw();

    fn = () => {
      new NRICUtil('');
    };
    expect(fn).to.throw();
  });
});

describe('Given a NRIC number', () => {
  describe('valid', () => {
    describe('without hypen', () => {
      it('should be validated as true', () => {
        const nric = new NRICUtil('800709085827');
        expect(nric.isValid()).to.be.equal(true);
      });
    });

    describe('with hypen', () => {
      it('should be validated as true', () => {
        const nric = new NRICUtil('800709-08-5827');
        expect(nric.isValid()).to.be.equal(true);
      });
    });

    it('should return a valid dob (1980-07-09)', () => {
      const nric = new NRICUtil('800709-08-5827');
      expect(nric.getDateOfBirth()).to.be.equal('1980-07-09');
    });

    it('should return a valid state (perak)', () => {
      const nric = new NRICUtil('800709-08-5827');
      expect(nric.getState().toLowerCase()).to.be.equal('perak');
    });

    it('should return a valid state', () => {
      const nric = new NRICUtil('800709-71-5827');
      expect(nric.getState().toLowerCase()).to.be.equal('a person born outside malaysia prior to 2001 excluding those born abroad without holding high quality identity card');
    });

    it('gender should be male', () => {
      const nric = new NRICUtil('800709-08-5827');
      expect(nric.getGender()).to.be.equal('male');
    });

    it('gender should be female', () => {
      const nric = new NRICUtil('800709-08-5828');
      expect(nric.getGender()).to.be.equal('female');
    });
  });

  describe('invalid', () => {
    describe('with wrong dob information', () => {
      it('should be validated as false', () => {
        const nric = new NRICUtil('000750-08-5827');
        expect(nric.isValid()).to.be.equal(false);
      });
    });

    describe('with wrong state information', () => {
      it('should be validated as false', () => {
        const nric = new NRICUtil('000712-97-5827');
        expect(nric.isValid()).to.be.equal(false);
      });
    });
  });
});
