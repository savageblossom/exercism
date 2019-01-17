const CODON_LIST = {
  'AUG': 'Methionine',    'UUU': 'Phenylalanine',   'UUC': 'Phenylalanine',
  'UUA': 'Leucine',       'UUG': 'Leucine',         'UCU': 'Serine',
  'UCC': 'Serine',        'UCA': 'Serine',          'UCG': 'Serine',
  'UAU': 'Tyrosine',      'UAC': 'Tyrosine',        'UGU': 'Cysteine',
  'UGC': 'Cysteine',      'UGG': 'Tryptophan',      'UGA': 'STOP',
  'UAA': 'STOP',          'UAG': 'STOP',
}

export default function(text) {
  if(typeof text == 'undefined') return [];

  var RNArray = [],
      // Initialize variable with entries from object,
      codonEntries = Object.entries(CODON_LIST),
      // and empty stringy one
      codonValue = '';

      // Main loop
  for(var i = 0; i < text.length; i += 3) {

    // Get three symbol codon
    var codonKey = text.slice(i, i+3),

    // and find specific value match from object entries
    codonValue = codonEntries.find(function(codonEntry) {
      return codonEntry[0] == codonKey;
    });
    if(typeof codonValue != 'undefined') codonValue = codonValue[1];
    else throw 'Invalid codon';

    // Set condition where you can't use STOP words
    if(codonValue == 'STOP') break;
    RNArray.push(codonValue);
  }
  return RNArray;
}
