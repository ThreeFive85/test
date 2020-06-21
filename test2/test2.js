const strToInt = (str) => {
  const numObj = {
    영: 0,
    일: 1,
    이: 2,
    삼: 3,
    사: 4,
    오: 5,
    육: 6,
    칠: 7,
    팔: 8,
    구: 9,
  };
  const bigNumObj = {
    십: 10,
    백: 100,
    천: 1000,
    만: 10000,
    억: 100000000,
    조: 1000000000000,
  };

  let num = 0;
  let empty = 0;
  let bigSum = 0;

  for (let i = 0; i < str.length; i++) {
    if (numObj[str[i]]) {
      num = numObj[str[i]];
    } else {
      if (bigNumObj[str[i]] < 10000) {
        empty += num === 0 ? bigNumObj[str[i]] : num * bigNumObj[str[i]];
      } else {
        empty += num;
        bigSum += empty === 0 ? bigNumObj[str[i]] : empty * bigNumObj[str[i]];
        empty = 0;
      }
      num = 0;
    }
  }
  return empty + num + bigSum;
};

// console.log(strToInt("삼천구백팔십일"));
// console.log(strToInt("십일"));
// console.log(strToInt("삼억칠천육백일"));
// console.log(strToInt("삼억칠천만육백일"));

const intToStr = (strInt) => {
  let smallStr = new Array(
    "",
    "일",
    "이",
    "삼",
    "사",
    "오",
    "육",
    "칠",
    "팔",
    "구",
    "십"
  );
  let bigStr = new Array("", "십", "백", "천");
  let result = "";

  for (let i = 0; i < strInt.length; i++) {
    str = "";
    korStr = smallStr[strInt.charAt(strInt.length - (i + 1))];
    // console.log(korStr);
    if (korStr != "") {
      str += korStr + bigStr[i];
    }
    if (i === 4) {
      str += "만";
    }
    if (i === 8) {
      str += "억";
    }
    if (i === 12) {
      str += "조";
    }
    result = str + result;
  }
  return result;
};
// console.log(intToStr("3"));

const solution = (a, b) => {
  let intA = strToInt(a);
  let intB = strToInt(b);
  let sumInt = intA + intB;
  let changStr = intToStr(String(sumInt));

  return changStr;
};
console.log(solution("삼천구백팔십일", "십일"));
console.log(solution("사", "오"));
console.log(solution("오억사천", "백십일"));
console.log(solution("삼억칠천만육백일", "십삼억칠천육백일"));

// export default solution;
