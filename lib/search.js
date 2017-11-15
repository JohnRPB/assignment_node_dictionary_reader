const exactMatch = (dictionaryData, searchWord) => {
  let keys = Object.keys(dictionaryData)
  let match = new RegExp(`${searchWord}`)
  return match.exec(keys)[0]
}

const beginMatch = (dictionaryData, beginsWith) => {
  let keys = Object.keys(dictionaryData)
  return keys.filter((item) => item.indexOf(beginsWith) === 0)
  //return match.exec(keys)[0]

}

const partialMatch = (dictionaryData, partial) => {
  let keys = Object.keys(dictionaryData)
  return keys.filter((item) => {
    let partialMatcher = new RegExp(partial);
    return partialMatcher.test(item);
  })
}

const endsMatch = (dictionaryData, endsWith) => {
  let keys = Object.keys(dictionaryData)
  return keys.filter((item) => {
    // let regexp = '.*' + 'n' + '\\z';
    let regexp = '\\S*' + endsWith + '\\b';
    let endsMatcher = new RegExp(regexp);
    return endsMatcher.test(item);
  });
}


module.exports = {
  beginMatch,
  exactMatch,
  partialMatch,
  endsMatch
}
