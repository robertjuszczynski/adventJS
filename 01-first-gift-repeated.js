function findFirstRepeated(gifts) {
  if (!gifts.length) {
    return -1
  }

  const result = []
  for (i = 0; i < gifts.length; i++) {
    if (result.includes(gifts[i])) {
      return gifts[i];
    }
    result.push(gifts[i]);
  }
  return -1;
}

const giftIds = [5, 1, 5, 1]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)