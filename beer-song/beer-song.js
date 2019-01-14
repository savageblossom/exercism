export default {
  verse: function(line) {
      if(line>2){
      return `${line} bottles of beer on the wall, ${line} bottles of beer.
Take one down and pass it around, ${line-1} bottles of beer on the wall.\n`;
      }
      else if(line==2){
        return `${line} bottles of beer on the wall, ${line} bottles of beer.
Take one down and pass it around, ${line-1} bottle of beer on the wall.\n`;
      }
      else if(line==1){
        return `${line} bottle of beer on the wall, ${line} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.\n`;
      }
      else if(line==0){
        return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
      }
  },
  sing: function(begin, end) {
    if(end === undefined) end = 0;
    if(begin === undefined) begin = 99;
    let string = '';
    for(let i = begin; i >= end; i--) {
      if(i==end) string += this.verse(i);
      else string += this.verse(i) + `\n`;
    }
    return string;
  }
}
