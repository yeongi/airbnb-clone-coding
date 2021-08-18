import KoreaJson from "./korea-locate.json";

//json에서 key를 분리하고
const sidoContent = KoreaJson.data.map((item) => {
  return Object.keys(item);
});
//배열 데이터를 분리 해서 1차원 배열로 만듬
const sidoArray = sidoContent.reduce((acc, cur) => {
  return acc.concat(cur);
});

const sigugunContent = Object.values(KoreaJson.data).map((item) => {
  return Object.values(item);
});

const sigugunArray = sigugunContent.reduce((acc, cur) => {
  return acc.concat(cur);
});

let counter = 0;

const AllLocationArray = sigugunArray.map((sigugun) => {
  const temp = sigugun.map((item) => {
    return `${sidoArray[counter]},${item}`;
  });
  counter++;
  return temp;
});

const tempArray = AllLocationArray.reduce((acc, cur) => {
  return acc.concat(cur);
});

export const AllLocation = tempArray.concat(sidoArray);
