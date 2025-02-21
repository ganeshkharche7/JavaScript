const currencyList = {
  INR: "in",
  AED: "ae",
  AFN: "af",
  XCD: "ag",
  ALL: "al",
  AMD: "am",
  ANG: "an",
  AOA: "ao",
  AQD: "aq",
  ARS: "ar",
  AUD: "au",
  AZN: "az",
  BAM: "ba",
  BBD: "bb",
  BDT: "bd",
  XOF: "be",
  BGN: "bg",
  BHD: "bh",
  BIF: "bi",
  BMD: "bm",
  BND: "bn",
  BOB: "bo",
  BRL: "br",
  BSD: "bs",
  NOK: "bv",
  BWP: "bw",
  BYR: "by",
  BZD: "bz",
  CAD: "ca",
  CDF: "cd",
  XAF: "cf",
  CHF: "ch",
  CLP: "cl",
  CNY: "cn",
  COP: "co",
  CRC: "cr",
  CUP: "cu",
  CVE: "cv",
  CYP: "cy",
  CZK: "cz",
  DJF: "dj",
  DKK: "dk",
  DOP: "do",
  DZD: "dz",
  ECS: "ec",
  EEK: "ee",
  EGP: "eg",
  ETB: "et",
  EUR: "fr",
  FJD: "fj",
  FKP: "fk",
  GBP: "gb",
  GEL: "ge",
  GGP: "gg",
  GHS: "gh",
  GIP: "gi",
  GMD: "gm",
  GNF: "gn",
  GTQ: "gt",
  GYD: "gy",
  HKD: "hk",
  HNL: "hn",
  HRK: "hr",
  HTG: "ht",
  HUF: "hu",
  IDR: "id",
  ILS: "il",
  
  IQD: "iq",
  IRR: "ir",
  ISK: "is",
  JMD: "jm",
  JOD: "jo",
  JPY: "jp",
  KES: "ke",
  KGS: "kg",
  KHR: "kh",
  KMF: "km",
  KPW: "kp",
  KRW: "kr",
  KWD: "kw",
  KYD: "ky",
  KZT: "kz",
  LAK: "la",
  LBP: "lb",
  LKR: "lk",
  LRD: "lr",
  LSL: "ls",
  LTL: "lt",
  LVL: "lv",
  LYD: "ly",
  MAD: "ma",
  MDL: "md",
  MGA: "mg",
  MKD: "mk",
  MMK: "mm",
  MNT: "mn",
  MOP: "mo",
  MRO: "mr",
  MTL: "mt",
  MUR: "mu",
  MVR: "mv",
  MWK: "mw",
  MXN: "mx",
  MYR: "my",
  MZN: "mz",
  NAD: "na",
  XPF: "nc",
  NGN: "ng",
  NIO: "ni",
  NPR: "np",
  NZD: "nz",
  OMR: "om",
  PAB: "pa",
  PEN: "pe",
  PGK: "pg",
  PHP: "ph",
  PKR: "pk",
  PLN: "pl",
  PYG: "py",
  QAR: "qa",
  RON: "ro",
  RSD: "rs",
  RUB: "ru",
  RWF: "rw",
  SAR: "sa",
  SBD: "sb",
  SCR: "sc",
  SDG: "sd",
  SEK: "se",
  SGD: "sg",
  SKK: "sk",
  SLL: "sl",
  SOS: "so",
  SRD: "sr",
  STD: "st",
  SVC: "sv",
  SYP: "sy",
  SZL: "sz",
  THB: "th",
  TJS: "tj",
  TMT: "tm",
  TND: "tn",
  TOP: "to",
  TRY: "tr",
  TTD: "tt",
  TWD: "tw",
  TZS: "tz",
  UAH: "ua",
  UGX: "ug",
  USD: "us",
  UYU: "uy",
  UZS: "uz",
  VEF: "ve",
  VND: "vn",
  VUV: "vu",
  YER: "ye",
  ZAR: "za",
  ZMK: "zm",
  ZWD: "zw",

};

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

for (let code in currencyList) {
  fromCurrency.innerHTML += `<option value="${code}">${code}</option>`;
  toCurrency.innerHTML += `<option value="${code}">${code}</option>`;
}

fromCurrency.addEventListener("change", () => {
  document.getElementById("from-flag").src = `https://flagcdn.com/w40/${
    currencyList[fromCurrency.value]
  }.png`;
});

toCurrency.addEventListener("change", () => {
  document.getElementById("to-flag").src = `https://flagcdn.com/w40/${
    currencyList[toCurrency.value]
  }.png`;
});

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "" || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${from}`
  );
  const data = await response.json();
  const rate = data.rates[to];
  const result = (amount * rate).toFixed(2);

  document.getElementById(
    "result"
  ).innerText = `${amount} ${from} = ${result} ${to}`;
}
