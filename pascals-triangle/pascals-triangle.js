export default class {
  constructor(num) {
    this.num = num;
  }

  createTriangle() {
    // Initialize basic "triangle"
    var triangleArray = [];
    if(this.num == 1) triangleArray = [[1]];
    if(this.num == 2) triangleArray = [[1], [1, 1]];
    if(this.num >= 3) triangleArray = [[1], [1, 1], [1, 2, 1]];


    // Our main loop
    for(var i = 3; i < this.num; i++) {
      // Initialize new empty element of array
      triangleArray[i] = [];
      // Insert into it sum of sub-elements from previous element of the array
      // I meant this relation [element] [sub-element]
      for(var j = 0; j < triangleArray[i-1].length-1; j++) {
        triangleArray[i][j] = triangleArray[i-1][j] + triangleArray[i-1][j+1];
      }
      // Insert number 1 to both sides of the array
      triangleArray[i].unshift(1);
      triangleArray[i].push(1);
    }

    return triangleArray;
  }
  get rows() {
    var getArray = this.createTriangle();
    return getArray;
  }

  get lastRow() {
    return this.rows[this.rows.length-1];  
  }
}
