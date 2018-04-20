(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["NRICUtil"] = factory(require("moment"));
	else
		root["NRICUtil"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"moment","commonjs2":"moment","amd":"moment","root":"moment"}
var external_commonjs_moment_commonjs2_moment_amd_moment_root_moment_ = __webpack_require__(0);
var external_commonjs_moment_commonjs2_moment_amd_moment_root_moment_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_moment_commonjs2_moment_amd_moment_root_moment_);

// CONCATENATED MODULE: ./src/nric.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var nric_NRIC = function () {
  function NRIC(dob, state, end) {
    _classCallCheck(this, NRIC);

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
      60: 'Brunei',
      61: 'Indonesia',
      62: 'Cambodia / Democratic Kampuchea / Kampuchea',
      63: 'Laos',
      64: 'Myanmar',
      65: 'Philippines',
      66: 'Singapore',
      67: 'Thailand',
      68: 'Vietnam',
      71: 'A person born outside Malaysia prior to 2001 Excluding those born abroad without holding High Quality Identity Card',
      72: 'A person born outside Malaysia prior to 2001 Excluding those born abroad without holding High Quality Identity Card',
      74: 'China',
      75: 'India',
      76: 'Pakistan',
      77: 'Saudi Arabia',
      78: 'Sri Lanka',
      79: 'Bangladesh',
      82: 'Unknown state',
      83: 'American Samoa / Asia-Pacific / Australia / Christmas Island / Cocos (Keeling) Islands / Cook Islands / Fiji / French Polynesia / Guam / Heard Island and McDonald Islands / Marshall Islands / Micronesia / New Caledonia / New Zealand / Niue / Norfolk Island / Papua New Guinea / Timor Leste / Tokelau / United States Minor Outlying Islands / Wallis and Futuna Islands',
      84: 'Anguilla / Argentina / Aruba / Bolivia / Brazil / Chile / Colombia / Ecuador / French Guinea / Guadeloupe / Guyana / Paraguay / Peru / South America / South Georgia and the South Sandwich Islands / Suriname / Uruguay / Venezuela',
      85: 'Africa / Algeria / Angola / Botswana / Burundi / Cameroon / Central African Republic / Chad / Congo-Brazzaville / Congo-Kinshasa / Djibouti / Egypt / Eritrea / Ethiopia / Gabon / Gambia / Ghana / Guinea / Kenya / Liberia / Malawi / Mali / Mauritania / Mayotte / Morocco / Mozambique / Namibia / Niger / Nigeria / Rwanda / Réunion / Senegal / Sierra Leone / Somalia / South Africa / Sudan / Swaziland / Tanzania / Togo / Tonga / Tunisia / Uganda / Western Sahara / Zaire / Zambia / Zimbabwe',
      86: 'Armenia / Austria / Belgium / Cyprus / Denmark / Europe / Faroe Islands / France / Finland / Finland, Metropolitan / Germany / Germany, Democratic Republic / Germany, Federal Republic / Greece / Holy See (Vatican City) / Italy / Luxembourg / Macedonia / Malta / Mediterranean / Monaco / Netherlands / Norway / Portugal / Republic of Moldova / Slovakia / Slovenia / Spain / Sweden / Switzerland / United Kingdom-Dependent Territories / United Kingdom-National Overseas / United Kingdom-Overseas Citizen / United Kingdom-Protected Person / United Kingdom-Subject',
      87: 'Britain / Great Britain / Ireland',
      88: 'Bahrain / Iran / Iraq / Palestine / Jordan / Kuwait / Lebanon / Middle East / Oman / Qatar / Republic of Yemen / Syria / Turkey / United Arab Emirates / Yemen Arab Republic / Yemen People\'s Democratic Republic',
      89: 'Far East / Japan / North Korea / South Korea / Taiwan',
      90: 'Bahamas / Barbados / Belize / Caribbean / Costa Rica / Cuba / Dominica / Dominican Republic / El Salvador / Grenada / Guatemala / Haiti / Honduras / Jamaica / Martinique / Mexico / Nicaragua / Panama / Puerto Rico / Saint Kitts and Nevis / Saint Lucia / Saint Vincent and the Grenadines / Trinidad and Tobago / Turks and Caicos Islands / Virgin Islands (USA)',
      91: 'Canada / Greenland / Netherlands Antilles / North America / Saint Pierre and Miquelon / United States of America',
      92: 'Albania / Belarus / Bosnia and Herzegovina / Bulgaria / Byelorussia / Croatia / Czech Republic / Czechoslovakia / Estonia / Georgia / Hungary / Latvia / Lithuania / Montenegro / Poland / Republic of Kosovo / Romania / Russian Federation / Serbia / Soviet Union / U.S.S.R. / Ukraine',
      93: 'Afghanistan / Andorra / Antarctica / Antigua and Barbuda / Azerbaijan / Benin / Bermuda / Bhutan / Bora Bora / Bouvet Island / British Indian Ocean Territory / Burkina Faso / Cape Verde / Cayman Islands / Comoros / Dahomey / Equatorial Guinea / Falkland Islands / French Southern Territories / Gibraltar / Guinea-Bissau / Hong Kong / Iceland / Ivory Coast / Kazakhstan / Kiribati / Kyrgyzstan / Lesotho / Libya / Liechtenstein / Macau / Madagascar / Maghribi / Malagasy / Maldives / Mauritius / Mongolia / Montserrat / Nauru / Nepal / Northern Marianas Islands / Outer Mongolia / Palau / Palestine / Pitcairn Islands / Saint Helena / Saint Lucia / Saint Vincent and the Grenadines / Samoa / San Marino / São Tomé and Príncipe / Seychelles / Solomon Islands / Svalbard and Jan Mayen Islands / Tajikistan / Turkmenistan / Tuvalu / Upper Volta / Uzbekistan / Vanuatu / Vatican City / Virgin Islands (British) / Western Samoa / Yugoslavia',
      98: 'Stateless / Stateless Person Article 1/1954',
      99: 'Mecca / Neutral Zone / No Information / Refugee / Refugee Article 1/1951 / United Nations Specialized Agency / United Nations Organization / Unspecified Nationality'
    };
  }

  _createClass(NRIC, [{
    key: 'isValid',
    value: function isValid() {
      return !!(this.getDateOfBirth() && this.getState());
    }
  }, {
    key: 'getDateOfBirth',
    value: function getDateOfBirth() {
      var dobMoment = external_commonjs_moment_commonjs2_moment_amd_moment_root_moment_default()(this.rawDOB, 'YYMMDD');
      if (dobMoment.isValid()) {
        return dobMoment.format('YYYY-MM-DD');
      }
      return false;
    }
  }, {
    key: 'getState',
    value: function getState() {
      var _this = this;

      var state = null;
      Object.keys(this.states).some(function (key) {
        if (key.split('|').indexOf(_this.rawState) !== -1) {
          state = _this.states[key];
          return _this.states[key];
        }
      });

      return state;
    }
  }, {
    key: 'getGender',
    value: function getGender() {
      return Number(this.rawEnd.slice(-1)) % 2 === 0 ? 'female' : 'male';
    }
  }, {
    key: 'getRawInput',
    get: function get() {
      return this.rawDOB + this.rawState + this.rawEnd;
    }
  }]);

  return NRIC;
}();

/* harmony default export */ var src_nric = (nric_NRIC);
// CONCATENATED MODULE: ./src/nric-malaysia.js
function nric_malaysia_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var nric_malaysia_NRICUtil = function NRICUtil(nric) {
  nric_malaysia_classCallCheck(this, NRICUtil);

  if (typeof nric === 'undefined' || typeof nric === 'string' && nric.length === 0) {
    throw new Error('nric number is required');
  }

  this.nric = nric.match(/^(\d{6})-?(\d{2})-?(\d{4})$/);

  if (!this.nric) {
    throw new Error('Invalid nric format');
  }

  return new src_nric(this.nric[1], this.nric[2], this.nric[3]);
};

/* harmony default export */ var nric_malaysia = __webpack_exports__["default"] = (nric_malaysia_NRICUtil);

/***/ })
/******/ ])["default"];
});