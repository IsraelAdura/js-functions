let pluralise = function (str) {
  switch (str.charAt(str.length - 1)) {
    case 's':
      // it's already plural
      return str
    case 'y':
      return str.slice(0, -1) + 'ies'
    default:
      return str + 's'
  }
}

export default pluralise
