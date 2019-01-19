export const largestProduct = (num, prodOf) => {
  var arr = [],
      multHandler = 1,
      biggestMult = 0;

  if(prodOf < 0) throw('Invalid input.');
  if(prodOf == 0) return 1;
  if(prodOf > num.length) throw('Slice size is too big.');

  for(var i = 0; i <= num.length-1; i++) {
    var numHandler = num.slice(i, i+prodOf).split('');
    arr.push(numHandler);
    for(var j = 0; j <= prodOf-1; j++) {
      if(numHandler.length == prodOf) {
        if(isNaN(+numHandler[j])) throw('Invalid input.');
        if(j == 0) {
          multHandler = 0;
          multHandler = ++multHandler * numHandler[j]
        }
        else multHandler *= numHandler[j];
      }
    }
    if(multHandler > biggestMult) biggestMult = multHandler;
  }

  return biggestMult
}
