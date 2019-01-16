export default class {

  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    var stringToWorkWith = (this.text).toLowerCase().split(''),
        alphabet = 'abcdefghijklmnopqrstuvwxyz123456789'.split(''),
        normalizedArray = [];
    for(let i = 0; i <= stringToWorkWith.length-1; i++) {
      for(let j = 0; j <= alphabet.length-1; j++) {
        if(stringToWorkWith[i] == alphabet[j]) {
          normalizedArray.push(stringToWorkWith[i]);
          break;
        }
      }
    }
    return normalizedArray = normalizedArray.join('');
  }

  size() {
    var stringToWorkWith = this.normalizePlaintext(),
        dividerNum;
    if( Math.sqrt(stringToWorkWith.length) %
        Math.round(Math.sqrt(stringToWorkWith.length)) == 0 )
        dividerNum = Math.sqrt(stringToWorkWith.length);
    else dividerNum = Math.floor(Math.sqrt(stringToWorkWith.length)) + 1;
    return dividerNum;
  }

  plaintextSegments() {
    var stringToWorkWith = this.normalizePlaintext(),
        dividerNum = this.size(),
        fragmentedText = [];
    for(var i = 0; i < stringToWorkWith.length; i += dividerNum) {
      fragmentedText.push(stringToWorkWith.slice(i, i+dividerNum));
    }
    return fragmentedText;
  }

  ciphertext() {
    var fragmentedText = this.plaintextSegments(),
        dividerNum = this.size(),
        cipheredText = '';

    for(var i = 0; i <= fragmentedText.length-1; i++) {
      fragmentedText[i] = fragmentedText[i].split('');
    }

    for(i = 0; i <= dividerNum; i++) {
      for(var j = 0; j <= fragmentedText.length-1; j++) {
        if(fragmentedText[j][i] !== undefined) cipheredText += fragmentedText[j][i];
      }
    }

    return cipheredText;
  }

}
