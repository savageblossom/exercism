export const reverseString = (text) => {
  var reversedText = '';
  for(var i = text.length-1; i >= 0; i--) {
    reversedText += text.charAt(i);
  }
  return reversedText;
}
