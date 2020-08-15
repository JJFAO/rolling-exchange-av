const currencies = [
  {
    name: 'ARS',
    flag: 'ars',
    nickname: 'pesos argentinos',
  },
  {
    name: 'USD',
    flag: 'usd',
    nickname: 'dolares americanos',
  },
  {
    name: 'EUR',
    flag: 'eur',
    nickname: 'euros',
  },
  {
    name: 'JPY',
    flag: 'jpy',
    nickname: 'yenes japonés',
  },
]

const initialRates = {
  "base": "USD",
  "date": "2020-07-24",
  "hour": "16:07",
  "rates": {
    "AED": 3.6732,
    "AFN": 76.800009,
    "ALL": 105.300181,
    "AMD": 481.616252,
    "ANG": 1.794706,
    "AOA": 552.920028,
    "ARS": 72.256304,
    "AUD": 1.388667,
    "AWG": 1.8,
    "AZN": 1.7025,
    "BAM": 1.664671,
    "BBD": 2,
    "BDT": 84.782014,
    "BGN": 1.650985,
    "BHD": 0.376942,
    "BIF": 1926.045866,
    "BMD": 1,
    "BND": 1.375436,
    "BOB": 6.903907,
    "BRL": 5.155199,
    "BSD": 1,
    "BTC": 0.00009,
    "BTN": 74.7473,
    "BWP": 11.519024,
    "BYN": 2.444017,
    "BZD": 2.015406,
    "CAD": 1.342558,
    "CDF": 1967.00881,
    "CHF": 0.90788,
    "CLF": 0.027505,
    "CLP": 761.499124,
    "CNH": 6.99905,
    "CNY": 7.008901,
    "COP": 3668.324037,
    "CRC": 581.487683,
    "CUC": 1,
    "CUP": 25.750001,
    "CVE": 93.950005,
    "CZK": 22.129016,
    "DJF": 178.008496,
    "DKK": 6.273181,
    "DOP": 58.472426,
    "DZD": 127.769912,
    "EGP": 15.969401,
    "ERN": 15.002887,
    "ETB": 35.144135,
    "EUR": 0.842711,
    "FJD": 2.1214,
    "FKP": 0.76239,
    "GBP": 0.76239,
    "GEL": 3.095,
    "GGP": 0.76239,
    "GHS": 5.772436,
    "GIP": 0.76239,
    "GMD": 51.810002,
    "GNF": 9634.031639,
    "GTQ": 7.698783,
    "GYD": 209.149729,
    "HKD": 7.75035,
    "HNL": 24.904252,
    "HRK": 6.309801,
    "HTG": 111.023938,
    "HUF": 290.925193,
    "IDR": 14524.206467,
    "ILS": 3.40793,
    "IMP": 0.76239,
    "INR": 74.785303,
    "IQD": 1192.173701,
    "IRR": 42105.002096,
    "ISK": 134.490007,
    "JEP": 0.76239,
    "JMD": 147.012477,
    "JOD": 0.709,
    "JPY": 104.560148,
    "KES": 107.750006,
    "KGS": 76.65438,
    "KHR": 4095.449445,
    "KMF": 417.949887,
    "KPW": 900.000045,
    "KRW": 1190.37006,
    "KWD": 0.305421,
    "KYD": 0.833177,
    "KZT": 421.709004,
    "LAK": 9064.628839,
    "LBP": 1512.53869,
    "LKR": 185.621635,
    "LRD": 199.250043,
    "LSL": 16.560001,
    "LYD": 1.378391,
    "MAD": 9.341782,
    "MDL": 16.576972,
    "MGA": 3831.134948,
    "MKD": 52.442318,
    "MMK": 1364.78723,
    "MNT": 2846.617514,
    "MOP": 7.981616,
    "MRO": 357.000018,
    "MRU": 37.832898,
    "MUR": 40.000002,
    "MVR": 15.400001,
    "MWK": 740.341506,
    "MXN": 22.036101,
    "MYR": 4.2395,
    "MZN": 70.800004,
    "NAD": 16.560001,
    "NGN": 387.953317,
    "NIO": 34.653609,
    "NOK": 9.062511,
    "NPR": 119.595702,
    "NZD": 1.494906,
    "OMR": 0.384997,
    "PAB": 1,
    "PEN": 3.504855,
    "PGK": 3.479807,
    "PHP": 49.185104,
    "PKR": 167.144661,
    "PLN": 3.718536,
    "PYG": 6948.898464,
    "QAR": 3.641,
    "RON": 4.0711,
    "RSD": 99.145005,
    "RUB": 73.428003,
    "RWF": 956.244534,
    "SAR": 3.751005,
    "SBD": 8.239469,
    "SCR": 17.78566,
    "SDG": 55.300002,
    "SEK": 8.680914,
    "SGD": 1.37149,
    "SHP": 0.76239,
    "SLL": 9804.638524,
    "SOS": 580.859511,
    "SRD": 7.458001,
    "SSP": 130.260007,
    "STD": 21380.844029,
    "STN": 20.900001,
    "SVC": 8.74883,
    "SYP": 511.516362,
    "SZL": 16.560001,
    "THB": 31.331501,
    "TJS": 10.310833,
    "TMT": 3.5,
    "TND": 2.7485,
    "TOP": 2.272028,
    "TRY": 6.97952,
    "TTD": 6.761938,
    "TWD": 29.297002,
    "TZS": 2324.640115,
    "UAH": 27.681016,
    "UGX": 3685.412053,
    "USD": 1,
    "UYU": 42.523035,
    "UZS": 10213.114561,
    "VEF": 248487.65461,
    "VES": 249366.791715,
    "VND": 22944.231986,
    "VUV": 114.11944,
    "WST": 2.610424,
    "XAF": 552.781914,
    "XAG": 0.042716,
    "XAU": 0.000511,
    "XCD": 2.70255,
    "XDR": 0.710743,
    "XOF": 552.781914,
    "XPD": 0.00048,
    "XPF": 100.562123,
    "XPT": 0.001101,
    "YER": 250.349973,
    "ZAR": 16.738401,
    "ZMW": 18.257215,
    "ZWL": 322.000016,
  },
  "success": true,
}

export {
  currencies,
  initialRates,
}