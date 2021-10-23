/* 太大的数字改成亿或万 */
export const changeValue = (num) => {
  if (num > 100000000) {
    return (num / 100000000).toFixed(2) + "亿";
  } else if (num > 10000) {
    return (num / 10000).toFixed(2) + "万";
  }
  return num;
};

/* 从数组中随机获取几个 */
export const getRandomArrayElements = (arr, count) => {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
};

/* 范围内的随机数 */
export const rangeRandom = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
