module.exports =
  function multiply(first, second) {
    let arrOne = first.split('').reverse(), arrTwo = second.split('').reverse(), result = [];
    for (let i = 0; i < arrOne.length; i++) {
      for (let k = 0; k < arrTwo.length; k++) {
        let product = arrOne[i] * arrTwo[k];

        if (result[i + k]) {
          result[i + k] = result[i + k] + product;
        } else {
          result[i + k] = product;
        }
      }
    }

    for (let i = 0; i < result.length; i++) {
      let lastNum = result[i] % 10;
      let nextNum = Math.floor(result[i] / 10);
      result[i] = lastNum;
      if (result[i + 1]) { // NOT OUT OF RANGE!
        result[i + 1] += nextNum;
      } else if (nextNum != 0) {
        result[i + 1] = nextNum;
      }
    }

    return result.reverse().join('');
  }
